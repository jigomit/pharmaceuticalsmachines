<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use Illuminate\Database\Seeder;

class BlogPostSeeder extends Seeder
{
    public function run(): void
    {
        $posts = [
            [
                'title' => 'How to Choose an Injectable Vial Filling Machine: A 2026 Buyer\'s Guide',
                'slug' => 'how-to-choose-vial-filling-machine-buyers-guide',
                'excerpt' => 'Output speed, fill accuracy, change-over time, validation support — the eight factors that separate a good vial filling machine from the right one for your product.',
                'category_tag' => 'Buying Guide',
                'tags' => ['vial filling', 'buyers guide', 'injectable'],
                'reading_minutes' => 8,
                'meta_title' => 'How to Choose a Vial Filling Machine (2026 Buyer\'s Guide)',
                'meta_description' => 'Expert guide from Kailash Machine Tools on selecting an injectable vial filling machine — speed, accuracy, rubber stoppering, validation and more.',
                'body' => "## Why this choice matters\n\nA vial filling machine is the heart of any sterile injectable line. Chosen right, it pays back across 15+ years of uptime. Chosen wrong, it becomes a daily bottleneck. This guide covers the eight factors we walk our clients through before they sign a PO.\n\n## 1. Output speed vs. batch size\nA 30-VPM monoblock suits a 5,000-vial batch. A 120-VPM inline rig only earns its keep above 50,000 vials per shift.\n\n## 2. Fill accuracy\nFor injectables, ±0.5 % is standard. Peristaltic pumps give the best CIP/SIP story; piston pumps win on high-viscosity products.\n\n## 3. Rubber stoppering integration\nIntegrated stoppering removes a manual handling step and keeps the vial closure under laminar airflow.\n\n## 4. Nitrogen purging\nOxygen-sensitive biologics need pre- and post-fill nitrogen purge. Confirm the gas panel is part of the scope.\n\n## 5. Change-over time\nAsk for a documented change-over SOP. 30 minutes is excellent; 2 hours is a red flag.\n\n## 6. Validation package\nDQ, FAT, IQ, OQ, PQ documentation should be standard — not an up-charge.\n\n## 7. Spare-parts availability\nRegional spare stocking matters more than purchase price. Insist on 5-year support terms.\n\n## 8. Regulatory pedigree\nIs the machine installed at USFDA / WHO-GMP / EU-GMP audited sites? Ask for references.\n\n## Talk to us\n\nAt Kailash Machine Tools we've built vial filling lines since 1991. Share your product, batch size and container specs — we'll recommend the right configuration in 48 hours.",
                'published_at' => now()->subDays(5),
            ],
            [
                'title' => 'Rotary vs Linear Vial Washing Machines: Which Fits Your Line?',
                'slug' => 'rotary-vs-linear-vial-washing-machines',
                'excerpt' => 'Speed, floor footprint, particulate removal efficiency — when rotary wins, and when linear makes more sense.',
                'category_tag' => 'Technical',
                'tags' => ['washing', 'comparison'],
                'reading_minutes' => 6,
                'body' => "## TL;DR\n\nRotary = higher speed, smaller footprint, better for injectables. Linear = simpler, lower capex, easier validation for LVP.\n\n## Rotary wash — the injectable standard\nA rotary wash turret handles 60–300 vials/min with a programmable four-cycle sequence. The recirculating-water → compressed-air → WFI → sterile-air pattern is the cGMP gold standard for small-volume parenterals.\n\n## Linear wash — simpler, slower\nLinear gripper-conveyor washing suits LVP bottles and ampoules where floor space is available and speed requirements are modest. Simpler validation and easier maintenance.\n\n## Decision matrix\n| Factor | Rotary | Linear |\n|---|---|---|\n| Output | ≥ 100 VPM | ≤ 80 VPM |\n| Footprint | Small | Long |\n| Validation complexity | Higher | Lower |\n| Capex | Higher | Lower |\n\n## Ask us\n\nEvery injectable facility is different. Send us your throughput target and container size — we'll spec the right wash.",
                'published_at' => now()->subDays(12),
            ],
            [
                'title' => 'cGMP-Compliant SS 316L: Why the Material Matters',
                'slug' => 'cgmp-ss316l-why-material-matters',
                'excerpt' => 'The difference between 304, 316 and 316L stainless steel — and why pharma regulators insist on 316L for product-contact surfaces.',
                'category_tag' => 'Compliance',
                'tags' => ['cgmp', 'materials', 'compliance'],
                'reading_minutes' => 5,
                'body' => "## The grades\n\n**SS 304** — 18% Cr, 8% Ni. General-purpose austenitic stainless. Not ideal for WFI or product contact.\n**SS 316** — adds 2-3% molybdenum for chloride pitting resistance.\n**SS 316L** — lower carbon (≤0.03%). Weldable without sensitisation. The pharma standard.\n\n## Why 316L for contact\n\n1. **Corrosion resistance** — resists WFI, PW, and most APIs.\n2. **Weld integrity** — low-C prevents carbide precipitation during welding, so no crevice corrosion.\n3. **Surface finish** — polishable to Ra < 0.4 µm, meeting ASME BPE.\n4. **Regulatory alignment** — FDA, EU-GMP, WHO-GMP all accept 316L for product-contact.\n\n## What to verify on a new machine\n\n- Material test certificates (heat numbers traceable)\n- Surface roughness reports (< 0.5 µm internal, < 0.8 µm external)\n- Weld procedure and inspection records\n- Passivation certificate\n\n## Our commitment\n\nEvery Kailash Machine Tools machine ships with full material traceability.",
                'published_at' => now()->subDays(20),
            ],
        ];

        foreach ($posts as $p) {
            BlogPost::updateOrCreate(['slug' => $p['slug']], array_merge($p, ['is_active' => true]));
        }
    }
}
