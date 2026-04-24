<?php

namespace App\Console\Commands;

use App\Models\BlogPost;
use App\Models\Category;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate';

    protected $description = 'Generate public/sitemap.xml from static routes + DB (products, categories, blog posts).';

    public function handle(): int
    {
        $sitemap = Sitemap::create();
        $baseUrl = rtrim((string) config('app.url', url('/')), '/');

        $staticRoutes = [
            ['url' => '/', 'priority' => 1.0, 'changefreq' => Url::CHANGE_FREQUENCY_WEEKLY],
            ['url' => '/about', 'priority' => 0.8, 'changefreq' => Url::CHANGE_FREQUENCY_MONTHLY],
            ['url' => '/products', 'priority' => 0.9, 'changefreq' => Url::CHANGE_FREQUENCY_WEEKLY],
            ['url' => '/industries', 'priority' => 0.7, 'changefreq' => Url::CHANGE_FREQUENCY_MONTHLY],
            ['url' => '/quality-compliance', 'priority' => 0.7, 'changefreq' => Url::CHANGE_FREQUENCY_MONTHLY],
            ['url' => '/clients', 'priority' => 0.6, 'changefreq' => Url::CHANGE_FREQUENCY_MONTHLY],
            ['url' => '/gallery', 'priority' => 0.5, 'changefreq' => Url::CHANGE_FREQUENCY_MONTHLY],
            ['url' => '/faq', 'priority' => 0.7, 'changefreq' => Url::CHANGE_FREQUENCY_MONTHLY],
            ['url' => '/blog', 'priority' => 0.7, 'changefreq' => Url::CHANGE_FREQUENCY_WEEKLY],
            ['url' => '/contact', 'priority' => 0.8, 'changefreq' => Url::CHANGE_FREQUENCY_YEARLY],
            ['url' => '/vial-filling-machine-manufacturer-india', 'priority' => 0.8, 'changefreq' => Url::CHANGE_FREQUENCY_MONTHLY],
            ['url' => '/ampoule-filling-sealing-machine-manufacturer-india', 'priority' => 0.8, 'changefreq' => Url::CHANGE_FREQUENCY_MONTHLY],
            ['url' => '/pharmaceutical-machinery-manufacturer-ahmedabad-india', 'priority' => 0.85, 'changefreq' => Url::CHANGE_FREQUENCY_MONTHLY],
            ['url' => '/privacy', 'priority' => 0.3, 'changefreq' => Url::CHANGE_FREQUENCY_YEARLY],
            ['url' => '/terms', 'priority' => 0.3, 'changefreq' => Url::CHANGE_FREQUENCY_YEARLY],
        ];

        foreach ($staticRoutes as $r) {
            $sitemap->add(
                Url::create($baseUrl.$r['url'])
                    ->setPriority($r['priority'])
                    ->setChangeFrequency($r['changefreq'])
                    ->setLastModificationDate(Carbon::now()),
            );
        }

        Category::where('is_active', true)->each(function (Category $c) use ($sitemap, $baseUrl) {
            $sitemap->add(
                Url::create("{$baseUrl}/products/{$c->slug}")
                    ->setPriority(0.85)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                    ->setLastModificationDate($c->updated_at),
            );
        });

        Product::where('is_active', true)->with('category:id,slug')->each(function (Product $p) use ($sitemap, $baseUrl) {
            $sitemap->add(
                Url::create("{$baseUrl}/products/{$p->category->slug}/{$p->slug}")
                    ->setPriority(0.8)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                    ->setLastModificationDate($p->updated_at),
            );
        });

        BlogPost::published()->each(function (BlogPost $post) use ($sitemap, $baseUrl) {
            $sitemap->add(
                Url::create("{$baseUrl}/blog/{$post->slug}")
                    ->setPriority(0.7)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                    ->setLastModificationDate($post->updated_at),
            );
        });

        $sitemap->writeToFile(public_path('sitemap.xml'));
        $this->info('sitemap.xml generated at '.public_path('sitemap.xml'));

        // Ping search engines (only in production with a real APP_URL).
        if (app()->environment('production')) {
            $sitemapUrl = "{$baseUrl}/sitemap.xml";
            $pings = [
                'Google' => "https://www.google.com/ping?sitemap={$sitemapUrl}",
                'Bing'   => "https://www.bing.com/ping?sitemap={$sitemapUrl}",
            ];
            foreach ($pings as $engine => $url) {
                try {
                    \Illuminate\Support\Facades\Http::timeout(8)->get($url);
                    $this->info("Pinged {$engine}.");
                } catch (\Throwable $e) {
                    $this->warn("Ping {$engine} failed: ".$e->getMessage());
                }
            }
        }

        return self::SUCCESS;
    }
}
