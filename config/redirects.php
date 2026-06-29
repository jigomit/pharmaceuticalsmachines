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

    // Product slug changes
    '/products/washing-machines/automatic-servo-ampoule-vials-pfs-washing-machine' => '/products/labelling/automatic-round-bottle-sticker-labelling-machine',
    '/products/washing-machines/automatic-servo-pfs-washing-machine' => '/products/labelling/automatic-round-bottle-sticker-labelling-machine',
    '/products/washing-machines/automatic-round-bottle-sticker-labelling-machine' => '/products/labelling/automatic-round-bottle-sticker-labelling-machine',
    '/products/washing-machines/automatic-ampoule-vials-washing-machine' => '/products/washing-machines/automatic-tunnel-type-rotary-vial-washing-machine',
    '/products/injectable-liquid-filling/automatic-eye-drop-filling-capping-sealing-machine' => '/products/injectable-liquid-filling/automatic-eye-drop-filling-sealing-machine',
    '/products/injectable-powder-filling/semi-automatic-auger-powder-filling-machine' => '/products/injectable-powder-filling/semi-type-single-head-machine',
    '/products/capping-sealing/vial-flip-off-sealing-machine' => '/products/capping-sealing/automatic-multi-head-vials-cap-machine',
    '/products/capping-sealing/automatic-multi-head-vial-cap-sealing-machine' => '/products/capping-sealing/automatic-multi-head-vials-cap-machine',
    '/products/capping-sealing/Automatic-Multi-Head-Vials-Cap-Machine' => '/products/capping-sealing/automatic-multi-head-vials-cap-machine',
    '/products/other-machinery/membrane-filter-holder' => '/products/other-machinery/wire-mesh-piston',
    '/products/labelling/wet-glue-labelling-machine' => '/products/labelling',
];
