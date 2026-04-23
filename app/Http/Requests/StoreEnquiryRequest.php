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
            'email' => ['required', 'email:rfc,dns', 'max:180'],
            'phone' => ['required', 'regex:/^\d{10}$/'],
            'company' => ['nullable', 'string', 'max:180'],
            'country' => ['nullable', 'string', 'max:80'],
            'message' => ['required', 'string', 'min:10', 'max:3000'],
            'product_slug' => ['nullable', 'string', 'max:120'],
            'website' => ['nullable', 'size:0'], // honeypot — real users leave empty
        ];
    }

    protected function prepareForValidation(): void
    {
        $phone = (string) $this->input('phone', '');

        $this->merge([
            'phone' => preg_replace('/\D+/', '', $phone),
        ]);
    }

    public function messages(): array
    {
        return [
            'email.email' => 'Please enter a valid email address.',
            'phone.regex' => 'Phone number must be exactly 10 digits.',
            'website.size' => 'Spam detected.',
        ];
    }
}
