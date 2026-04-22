<x-mail::message>
# Thank you for your enquiry, {{ $enquiry->name }}

We have received your enquiry @if($enquiry->product) about the **{{ $enquiry->product->name }}**@endif and will get back to you within one business day.

In the meantime, feel free to reach us directly:

- **Phone / WhatsApp:** +91 98250 18210
- **Email:** info@pharmaceuticalsmachines.com
- **Address:** 4, Devashray Industrial Estate, Vatva, Ahmedabad 382445, Gujarat, India

<x-mail::button :url="config('app.url').'/products'">
Explore Our Machinery
</x-mail::button>

Warm regards,
**Kailash Machine Tools Team**

*Precision Pharma Machinery, Engineered Since 1991*
</x-mail::message>
