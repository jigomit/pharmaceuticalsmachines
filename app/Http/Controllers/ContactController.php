<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEnquiryRequest;
use App\Mail\EnquiryAutoReplyMail;
use App\Mail\EnquiryReceivedMail;
use App\Models\Enquiry;
use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function show(): Response
    {
        return Inertia::render('Contact');
    }

    public function store(StoreEnquiryRequest $request): RedirectResponse
    {
        $data = $request->validated();

        $product = null;
        if (! empty($data['product_slug'] ?? null)) {
            $product = Product::where('slug', $data['product_slug'])->first();
        }

        $enquiry = Enquiry::create([
            'product_id' => $product?->id,
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'company' => $data['company'] ?? null,
            'country' => $data['country'] ?? null,
            'message' => $data['message'],
            'source_url' => $request->headers->get('referer'),
            'ip' => $request->ip(),
            'user_agent' => substr((string) $request->userAgent(), 0, 255),
            'status' => 'new',
        ]);

        try {
            Mail::to(config('company.email'))
                ->cc(config('company.email_legacy'))
                ->send(new EnquiryReceivedMail($enquiry->fresh('product')));
            Mail::to($enquiry->email)->send(new EnquiryAutoReplyMail($enquiry->fresh('product')));
        } catch (\Throwable $e) {
            report($e);
        }

        return back()->with('success', 'Thanks — your enquiry has been received. Our team will be in touch within 24 hours.');
    }
}
