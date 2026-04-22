<?php

namespace App\Mail;

use App\Models\Enquiry;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class EnquiryAutoReplyMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public Enquiry $enquiry) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'We received your enquiry — Kailash Machine Tools',
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.enquiry-auto-reply',
            with: ['enquiry' => $this->enquiry],
        );
    }
}
