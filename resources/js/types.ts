export interface CompanyInfo {
    name: string;
    legal_name: string;
    tagline: string;
    phone: string;
    whatsapp: string;
    email: string;
    address: {
        street: string;
        locality: string;
        city: string;
        region: string;
        postal_code: string;
        country: string;
        country_name: string;
        lat: number;
        lng: number;
    };
    hours: Record<string, string>;
    socials: Record<string, string | null>;
}

export interface PageProps {
    company: CompanyInfo;
    canonical: string;
    flash: { success?: string; error?: string };
    [key: string]: any;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    short_description?: string;
    description?: string;
    icon?: string;
    image?: string;
    products_count?: number;
    meta_title?: string;
    meta_description?: string;
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    category_id: number;
    category?: Category;
    short_description: string;
    long_description?: string;
    features?: string[];
    applications?: string[];
    specs?: Record<string, string | number>;
    images?: string[];
    hero_image?: string;
    datasheet_pdf?: string | null;
    meta_title?: string;
    meta_description?: string;
    is_featured?: boolean;
}
