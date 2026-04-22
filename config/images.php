<?php

/*
 * Local image map. All images are self-hosted under /public/images/machinery/
 * sourced from Wikimedia Commons (public-domain / CC licensed, independent
 * of the client's own domain pharmaceuticalsmachines.com).
 *
 * To swap an image: drop a new JPG into /public/images/machinery/ and update
 * the slot below. Run: php artisan db:seed --class=ImageSeeder --force
 */

$dir = '/images/machinery';

// Available library (semantic → file)
$LIB = [
    'pharma_line'        => "{$dir}/arkopharma-pharma-production-line.jpg",   // wide pharma production line
    'tube_filler'        => "{$dir}/tube-filling-machine.jpg",                // SS tube filling machine
    'liquid_filler'      => "{$dir}/liquid-filling-machine.jpg",              // liquid filling line
    'induction_sealer'   => "{$dir}/induction-sealer-conveyor.jpg",           // SS sealer with bottles on conveyor
    'bottle_labeller'    => "{$dir}/bottle-labelling-line.jpg",               // bottles on labelling conveyor
    'bucket_labeller'    => "{$dir}/bucket-labelling-machine.jpg",            // labelling machine
    'blister_line'       => "{$dir}/blister-machine-line.jpg",                // blister packing line
    'blister_operator'   => "{$dir}/blister-machine-operator.jpg",            // operator at blister machine
    'packing_division'   => "{$dir}/pharma-packing-division.jpg",             // pharma packing area
    'finished_goods'     => "{$dir}/pharma-finished-goods.jpg",               // pharma finished goods
    'washing_machine'    => "{$dir}/WhatsApp Image 2026-04-15 at 4.51.02 PM.jpeg", // washing machine updated image
    'rotary_vial'        => "{$dir}/Rotry-vial-1.png",                        // rotary vial washing machine updated image
    'rotary_vial_2'      => "{$dir}/ROTARY-VIAL-WASHING-2.webp",              // rotary vial washing machine alt
    'rotary_vial_3'      => "{$dir}/WhatsApp Image 2026-04-15 at 5.04.55 PM.jpeg", // rotary vial washing machine third image updated
    'linear_bottle_1'    => "{$dir}/Gemini_Generated_Image_xu9u3xu9u3xu9u3x.png", // linear ampoule washing machine updated image
    'linear_ampoule_2'   => "{$dir}/WhatsApp Image 2026-04-15 at 6.09.31 PM.jpeg", // linear ampoule washing machine second image updated
    'linear_ampoule_3'   => "{$dir}/Linear-Ampoule-3.jpg",                    // linear ampoule washing machine third image
    'auto_rotary_bottle_2' => "{$dir}/automatic-rotary-bottle-washing-2.jpg", // automatic rotary bottle washing machine second image
    'auto_rotary_bottle_1' => "{$dir}/Gemini_Generated_Image_20lzv720lzv720lz.png", // automatic rotary bottle washing machine first image updated
    'auto_rotary_bottle_3' => "{$dir}/Rotary-Bottle-Washing-Machine-3.jpg",   // automatic rotary bottle washing machine third image
    'rubber_aluminium_2' => "{$dir}/rubber-aluminium-horizontal-2.webp",      // rubber bung washing machine (legacy)
    'rubber_stop_2' => "{$dir}/rubber-bung-stoper-2.jpg",                     // rubber bung washing machine second image
    'rubber_bung_1' => "{$dir}/Rubber Bung Washing Machine-1.png",             // rubber bung washing machine first image updated
    'rubber_bung_3' => "{$dir}/Rubber-Bung-Washing-3.png",                    // rubber bung washing machine third image
    'injectable_liquid_1' => "{$dir}/Injectable Liquid-1.png",              // injectable liquid filling category updated
    'injectable_powder_1' => "{$dir}/Injectable Powder.jpeg",               // injectable powder filling category updated
    'dry_injection_powder_1' => "{$dir}/dry-powder-1.jpeg",                 // dry injection powder filling machine hero updated
    'dry_injection_powder_2' => "{$dir}/dry-powder-2.png",                  // dry injection powder filling machine second image updated
    'dry_injection_powder_3' => "{$dir}/dry-machine-3-ezremove.png",        // dry injection powder filling machine third image updated
    'dry_syrup_powder_1' => "{$dir}/dry-syrup-1.png",                       // dry syrup powder filling machine hero updated
    'dry_syrup_powder_2' => "{$dir}/dry-syrup-2.jpeg",                      // dry syrup powder filling machine second image updated
    'dry_syrup_powder_3' => "{$dir}/dry-syrup-3.jpeg",                      // dry syrup powder filling machine third image updated
    'capping_category_1' => "{$dir}/Capping.png",                           // capping sealing category updated image
    'ropp_cap_1' => "{$dir}/ropp-machine-1.png",                              // ropp cap sealing machine hero updated
    'ropp_cap_2' => "{$dir}/ropp-machine-2.jpeg",                            // ropp cap sealing machine second image updated
    'ropp_cap_3' => "{$dir}/ropp-machine-3.jpeg",                            // ropp cap sealing machine third image updated
    'automatic_vial_1' => "{$dir}/automatic-vial-filling-machine-1.png",      // automatic vial filling machine hero
    'vial_filling_3' => "{$dir}/vial-filling-with-3.jpg",                       // automatic vial filling machine gallery 3
    'automatic_vial_3' => "{$dir}/Ampoule Filling-3.png",                       // automatic vial filling machine updated third image
    'ampoule_filling_1' => "{$dir}/Ampoule-filling-2.png",                     // ampoule filling & sealing machine hero
    'ampoule_filling_2' => "{$dir}/Automatic-Six-Head-2.webp",                 // ampoule filling & sealing machine second image
    'ampoule_filling_3' => "{$dir}/Ampoule Filling.png",                       // ampoule filling & sealing machine third image
    'monoblock_vial_1' => "{$dir}/mono-main-1.jpeg",                           // monoblock vial filling stoppering sealing hero
    'monoblock_vial_2' => "{$dir}/monoblock-bottle-filling-2-ezremove.png",   // monoblock vial filling stoppering sealing second image
    'monoblock_vial_3' => "{$dir}/Monoblock-3.jpg",                            // monoblock vial filling stoppering sealing third image
    'vial_flip_off_1' => "{$dir}/vial-filling-1.png",                          // vial flip off sealing machine hero updated
    'vial_flip_off_2' => "{$dir}/vial-ripper-2.jpeg",                          // vial flip off sealing machine second image updated
    'vial_flip_off_3' => "{$dir}/vial-flip-3.avif",                            // vial flip off sealing machine third image updated
    'screw_cap_1' => "{$dir}/screw-capping-1.png",                             // screw capping machine hero updated
    'screw_cap_2' => "{$dir}/screw-cap-2.jpeg",                                // screw capping machine second image
    'screw_cap_3' => "{$dir}/screw-capping-3.jpg",                             // screw capping machine third image updated
    'labeling_machines_1' => "{$dir}/labeling-machines.png",                   // labelling category first image updated
    'labeling_machine_1' => "{$dir}/labeling-machine-1.png",                   // automatic sticker labelling machine hero updated
    'labeling_machine_2' => "{$dir}/labeling-machine-2.jpg",                   // automatic sticker labelling machine second image updated
    'labeling_machine_3' => "{$dir}/labeling-machine-3.jpeg",                  // automatic sticker labelling machine third image updated
    'wet_glue_1' => "{$dir}/wet-glue-1.jpeg",                                  // wet glue labelling machine hero updated
    'wet_glue_2' => "{$dir}/wet-glue-2.jpg",                                   // wet glue labelling machine second image updated
    'wet_glue_3' => "{$dir}/wet-glue-3.jpg",                                   // wet glue labelling machine third image updated
    'ampoule_sticker_1' => "{$dir}/ampoule-sticker-1.jpeg",                    // ampoule sticker labelling machine hero updated
    'ampoule_sticker_2' => "{$dir}/Ampoule Sticker-2.webp",                    // ampoule sticker labelling machine second image updated
    'ampoule_sticker_3' => "{$dir}/ampoule-sticker-3.jpg",                     // ampoule sticker labelling machine third image updated
    'visual_inspection_1' => "{$dir}/visual-inspection-3 (1).jpeg",            // visual inspection category image updated
    'manual_ampoule_1' => "{$dir}/manual-ampoule-1.png",                       // manual inspection booth hero updated
    'manual_ampoule_2' => "{$dir}/Manual Ampoule-2.jpeg",                      // manual inspection booth second image updated
    'manual_ampoule_3' => "{$dir}/Manual Ampoule-3.jpg",                       // manual inspection booth third image updated
    'semi_auto_visual_1' => "{$dir}/semi-automatic-visual.jpeg",               // semi automatic vial inspection roller hero updated
    'semi_auto_visual_2' => "{$dir}/semi-automatic-2.jpg",                     // semi automatic vial inspection roller second image updated
    'semi_auto_visual_3' => "{$dir}/semi-automatic-3.jpg",                     // semi automatic vial inspection roller third image updated
    'single_rotary_mini_1' => "{$dir}/single-rotary-mini-1.jpg",               // single rotary mini tablet press hero updated
    'single_rotary_mini_2' => "{$dir}/single-rotry-mini-2.jpg",                // single rotary mini tablet press second image updated
    'single_rotary_mini_3' => "{$dir}/single-rotry-mini-3.jpeg",               // single rotary mini tablet press third image updated
    'lab_ball_mill_1' => "{$dir}/lab_ball_mill-1.gif",                          // lab ball mill hero updated
    'lab_ball_mill_2' => "{$dir}/lab-ball-mill-2.jpeg",                         // lab ball mill second image updated
    'lab_ball_mill_3' => "{$dir}/lab-ball-mill-3.jpeg",                         // lab ball mill third image updated
    'roll_compactor_1' => "{$dir}/Roll Compactor-1.jpeg",                       // roll compactor hero
    'roll_compactor_2' => "{$dir}/roller-compactor-2.jpg",                      // roll compactor second image
    'roll_compactor_3' => "{$dir}/Roller-Compactor-3.jpg",                      // roll compactor third image
    'ointment_cream_1' => "{$dir}/Ointment & Cream.jpeg",                       // ointment & cream plants image
    'vacuum_ointment_1' => "{$dir}/Vacuum Ointment-1.jpeg",                     // vacuum ointment manufacturing plant hero
    'vacuum_ointment_2' => "{$dir}/vacuum-ointment-2.jpg",                      // vacuum ointment manufacturing plant second image
    'vacuum_ointment_3' => "{$dir}/vacuum-ointment-3.jpeg",                     // vacuum ointment manufacturing plant third image
    'liquid_syrup_main' => "{$dir}/liquid-syrup-main.jpeg",                     // liquid syrup plants category image
    'liquid_syrup_1' => "{$dir}/liquid-syrup-1.jpeg",                           // liquid syrup manufacturing plant hero
    'liquid_syrup_2' => "{$dir}/liquid-syrup-2.webp",                           // liquid syrup manufacturing plant second image
    'liquid_syrup_3' => "{$dir}/liquid-syrup-3.webp",                           // liquid syrup manufacturing plant third image
];

return [
    'base_dir' => $dir,
    'library'  => $LIB,

    // === HERO ==================================================
    'hero.primary'   => $LIB['pharma_line'],       // wide pharma line — stunning hero shot
    'hero.secondary' => $LIB['liquid_filler'],     // liquid filling machine
    'hero.tertiary'  => $LIB['induction_sealer'],  // sealer on conveyor

    // === ABOUT / HERITAGE ======================================
    'about.factory'  => $LIB['pharma_line'],
    'about.team'     => $LIB['blister_operator'],  // operator at work
    'about.heritage' => $LIB['packing_division'],

    // === QUALITY & COMPLIANCE ===================================
    'quality.cleanroom'  => $LIB['pharma_line'],
    'quality.validation' => $LIB['finished_goods'],

    // === GALLERY (all 10 unique shots) =========================
    'gallery' => array_values($LIB),

    // === CATEGORY HERO IMAGES (slug → URL) =====================
    'category' => [
        'washing-machines'          => $LIB['washing_machine'],    // requested washing machine image
        'injectable-liquid-filling' => $LIB['injectable_liquid_1'],
        'injectable-powder-filling' => $LIB['injectable_powder_1'],
        'capping-sealing'           => $LIB['capping_category_1'],
        'labelling'                 => $LIB['labeling_machines_1'],
        'inspection'                => $LIB['visual_inspection_1'],
        'tablet-section'            => $LIB['blister_line'],        // solid-dose packaging line
        'ointment-cream-plants'     => $LIB['ointment_cream_1'],    // uploaded ointment & cream image
        'liquid-syrup-plants'       => $LIB['liquid_syrup_main'],
        'packing-conveyors'         => $LIB['bottle_labeller'],     // conveyor with bottles
        'change-parts'              => $LIB['bucket_labeller'],
        'pharma-furniture'          => $LIB['packing_division'],    // pharma work area
        'tray-dryers-storage'       => $LIB['finished_goods'],
        'other-machinery'           => $LIB['pharma_line'],
    ],

    // === INDUSTRY CARDS (slug → URL) ===========================
    'industry' => [
        'pharmaceutical' => $LIB['pharma_line'],
        'biotech'        => $LIB['liquid_filler'],
        'nutraceutical'  => $LIB['blister_line'],
        'cosmetics'      => $LIB['tube_filler'],
        'ayurvedic'      => $LIB['packing_division'],
        'veterinary'     => $LIB['induction_sealer'],
    ],

    // === PRODUCT HERO IMAGES (slug → URL) ======================
    'product.default' => $LIB['pharma_line'],

    'product' => [
        // Washing — closest pharma-machine shots
        'rotary-vial-washing-machine'              => $LIB['rotary_vial'],
        'linear-ampoule-washing-machine'           => $LIB['linear_bottle_1'],
        'automatic-rotary-bottle-washing-machine'  => $LIB['auto_rotary_bottle_1'],
        'rubber-bung-washing-machine'              => $LIB['rubber_bung_1'],

        // Liquid Filling
        'automatic-vial-filling-machine'            => $LIB['automatic_vial_1'],
        'ampoule-filling-sealing-machine'           => $LIB['ampoule_filling_1'],
        'monoblock-vial-filling-stoppering-sealing' => $LIB['monoblock_vial_1'],

        // Powder Filling
        'dry-injection-powder-filling-machine' => $LIB['dry_injection_powder_1'],
        'dry-syrup-powder-filling-machine'     => $LIB['dry_syrup_powder_1'],

        // Capping / Sealing — use real sealer
        'ropp-cap-sealing-machine'       => $LIB['ropp_cap_1'],
        'vial-flip-off-sealing-machine'  => $LIB['vial_flip_off_1'],
        'screw-capping-machine'          => $LIB['screw_cap_1'],

        // Labelling — use real labelling line
        'automatic-sticker-labelling-machine' => $LIB['labeling_machine_1'],
        'wet-glue-labelling-machine'          => $LIB['wet_glue_1'],
        'ampoule-sticker-labelling-machine'   => $LIB['ampoule_sticker_1'],

        // Inspection
        'manual-inspection-booth'               => $LIB['manual_ampoule_1'],
        'semi-automatic-vial-inspection-roller' => $LIB['semi_auto_visual_1'],

        // Tablet section
        'single-rotary-mini-tablet-press' => $LIB['single_rotary_mini_1'],
        'lab-ball-mill'                   => $LIB['lab_ball_mill_1'],
        'roll-compactor'                  => $LIB['roll_compactor_1'],

        // Ointment
        'vacuum-ointment-manufacturing-plant' => $LIB['vacuum_ointment_1'],

        // Syrup
        'liquid-syrup-manufacturing-plant' => $LIB['liquid_syrup_1'],

        // Conveyors
        'ss-slat-conveyor'  => $LIB['bottle_labeller'],
        'rotary-turn-table' => $LIB['induction_sealer'],

        // Tray dryers / storage
        'hot-air-tray-dryer' => $LIB['packing_division'],
        'ss-storage-vessel'  => $LIB['liquid_filler'],

        // Change parts
        'format-parts-changeover-kits' => $LIB['bucket_labeller'],

        // Other
        'rubber-stopper-processor' => $LIB['tube_filler'],
    ],

    // === PRODUCT GALLERY OVERRIDES (slug => [urls...]) ==========
    // Note: hero image is always first; these are appended in order.
    'product_gallery' => [
        'rotary-vial-washing-machine' => [
            $LIB['rotary_vial_2'],
            $LIB['rotary_vial_3'],
        ],
        'linear-ampoule-washing-machine' => [
            $LIB['linear_ampoule_2'],
            $LIB['linear_ampoule_3'],
        ],
        'automatic-rotary-bottle-washing-machine' => [
            $LIB['auto_rotary_bottle_2'],
            $LIB['auto_rotary_bottle_3'],
        ],
        'rubber-bung-washing-machine' => [
            $LIB['rubber_stop_2'],
            $LIB['rubber_bung_3'],
        ],
        'automatic-vial-filling-machine' => [
            $LIB['pharma_line'],
            $LIB['automatic_vial_3'],
        ],
        'ampoule-filling-sealing-machine' => [
            $LIB['ampoule_filling_2'],
            $LIB['ampoule_filling_3'],
        ],
        'monoblock-vial-filling-stoppering-sealing' => [
            $LIB['monoblock_vial_2'],
            $LIB['monoblock_vial_3'],
        ],
        'dry-injection-powder-filling-machine' => [
            $LIB['dry_injection_powder_2'],
            $LIB['dry_injection_powder_3'],
        ],
        'dry-syrup-powder-filling-machine' => [
            $LIB['dry_syrup_powder_2'],
            $LIB['dry_syrup_powder_3'],
        ],
        'vial-flip-off-sealing-machine' => [
            $LIB['vial_flip_off_2'],
            $LIB['vial_flip_off_3'],
        ],
        'ropp-cap-sealing-machine' => [
            $LIB['ropp_cap_2'],
            $LIB['ropp_cap_3'],
        ],
        'screw-capping-machine' => [
            $LIB['screw_cap_2'],
            $LIB['screw_cap_3'],
        ],
        'automatic-sticker-labelling-machine' => [
            $LIB['labeling_machine_2'],
            $LIB['labeling_machine_3'],
        ],
        'wet-glue-labelling-machine' => [
            $LIB['wet_glue_2'],
            $LIB['wet_glue_3'],
        ],
        'ampoule-sticker-labelling-machine' => [
            $LIB['ampoule_sticker_2'],
            $LIB['ampoule_sticker_3'],
        ],
        'manual-inspection-booth' => [
            $LIB['manual_ampoule_2'],
            $LIB['manual_ampoule_3'],
        ],
        'semi-automatic-vial-inspection-roller' => [
            $LIB['semi_auto_visual_2'],
            $LIB['semi_auto_visual_3'],
        ],
        'single-rotary-mini-tablet-press' => [
            $LIB['single_rotary_mini_2'],
            $LIB['single_rotary_mini_3'],
        ],
        'lab-ball-mill' => [
            $LIB['lab_ball_mill_2'],
            $LIB['lab_ball_mill_3'],
        ],
        'roll-compactor' => [
            $LIB['roll_compactor_2'],
            $LIB['roll_compactor_3'],
        ],
        'vacuum-ointment-manufacturing-plant' => [
            $LIB['vacuum_ointment_2'],
            $LIB['vacuum_ointment_3'],
        ],
        'liquid-syrup-manufacturing-plant' => [
            $LIB['liquid_syrup_2'],
            $LIB['liquid_syrup_3'],
        ],
    ],

    // === BLOG HERO IMAGES ======================================
    'blog' => [
        'how-to-choose-vial-filling-machine-buyers-guide' => $LIB['liquid_filler'],
        'rotary-vs-linear-vial-washing-machines'          => $LIB['tube_filler'],
        'cgmp-ss316l-why-material-matters'                => $LIB['pharma_line'],
    ],
];
