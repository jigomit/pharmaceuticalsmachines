<?php

/*
 * 301 redirect map from legacy Shree Ganesh Pharmatech (HTTrack clone) URLs
 * to new Kailash Machine Tools URL structure.
 *
 * Key = old path (exact match, with or without trailing slash)
 * Value = new path (will 301 redirect)
 */

return [
    // Pages
    '/about-us' => '/about',
    '/services' => '/industries',
    '/videos' => '/gallery',
    '/video' => '/gallery',
    '/contact-us' => '/contact',

    // Old product category URL patterns
    '/washing' => '/products/washing-machines',
    '/products/washing' => '/products/washing-machines',
    '/filling' => '/products/injectable-liquid-filling',
    '/liquid-filling' => '/products/injectable-liquid-filling',
    '/powder-filling' => '/products/injectable-powder-filling',
    '/capping' => '/products/capping-sealing',
    '/labelling' => '/products/labelling',
    '/labeling' => '/products/labelling',
    '/inspection' => '/products/inspection',
    '/tablet-section' => '/products/tablet-section',
    '/ointment-manufacturing' => '/products/ointment-cream-plants',
    '/liquid-syrup-plant' => '/products/liquid-syrup-plants',
    '/other-machinery' => '/products/other-machinery',
    '/pharma-furnishings' => '/products/pharma-furniture',
    '/packing-conveyor' => '/products/packing-conveyors',
    '/change-parts' => '/products/change-parts',
    '/warehouse-storage' => '/products/tray-dryers-storage',

    // Legacy WordPress index pages
    '/machines' => '/products',
    '/product' => '/products',
];
