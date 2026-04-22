<x-mail::message>
# New Enquiry Received

**Source:** {{ $enquiry->source_url ?? 'Direct' }}
**Submitted:** {{ $enquiry->created_at->format('d M Y, H:i') }}

---

**Name:** {{ $enquiry->name }}
**Email:** {{ $enquiry->email }}
**Phone:** {{ $enquiry->phone }}
@if($enquiry->company)
**Company:** {{ $enquiry->company }}
@endif
@if($enquiry->country)
**Country:** {{ $enquiry->country }}
@endif

@if($enquiry->product)
---

**Product:** {{ $enquiry->product->name }}
@if($enquiry->product->model_code)
**Model:** {{ $enquiry->product->model_code }}
@endif
@endif

---

**Message**

{{ $enquiry->message }}

<x-mail::button :url="config('app.url').'/admin/enquiries/'.$enquiry->id">
View in Admin
</x-mail::button>

Kailash Machine Tools
</x-mail::message>
