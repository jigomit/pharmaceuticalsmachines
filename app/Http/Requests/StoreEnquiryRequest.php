<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEnquiryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email:rfc', 'max:180'],
            'phone' => ['required', 'string', 'max:32'],
            'company' => ['nullable', 'string', 'max:180'],
            'country' => ['nullable', 'string', 'max:80'],
            'message' => ['required', 'string', 'min:10', 'max:3000'],
            'product_slug' => ['nullable', 'string', 'max:120'],
            'website' => ['nullable', 'size:0'], // honeypot — real users leave empty
        ];
    }

    public function messages(): array
    {
        return [
            'website.size' => 'Spam detected.',
        ];
    }
}
