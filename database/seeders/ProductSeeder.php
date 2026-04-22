<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            // WASHING
            [
                'category' => 'washing-machines',
                'name' => 'Rotary Vial Washing Machine',
                'slug' => 'rotary-vial-washing-machine',
                'model_code' => 'KMT-RVW-120',
                'short_description' => '120 BPM rotary vial washing machine with four-station wash sequence — recirculating water, compressed air, WFI and sterile air.',
                'features' => ['Four-cycle rotary wash (recirc water → compressed air → WFI → sterile air)', 'SS 316L contact parts', 'Allen-Bradley PLC + HMI', 'No-vial no-spray logic', 'CIP-compatible wash heads', 'Output 60–120 BPM depending on vial size'],
                'applications' => ['Injectable vials (2 ml – 100 ml)', 'Lyophilised product containers', 'Pre-sterilisation vial wash'],
                'specs' => ['Output' => '60–120 vials/min', 'Vial size range' => '2 ml – 100 ml', 'Power' => '3 kW', 'Compressed air' => '6 bar, 300 L/min', 'WFI pressure' => '2 bar', 'Dimensions (LxWxH)' => '1800 x 1200 x 1800 mm'],
                'is_featured' => true,
                'sort_order' => 1,
                'meta_title' => 'Rotary Vial Washing Machine Manufacturer India | 120 BPM cGMP',
                'meta_description' => 'Kailash Machine Tools rotary vial washing machine — 120 vials/min, four-station wash sequence, SS 316L, cGMP compliant. Manufactured in Ahmedabad.',
            ],
            [
                'category' => 'washing-machines',
                'name' => 'Linear Ampoule Washing Machine',
                'slug' => 'linear-ampoule-washing-machine',
                'model_code' => 'KMT-LAW-200',
                'short_description' => 'Linear ampoule washing machine with multi-jet external and internal rinsing for 1–25 ml ampoules at up to 200 ampoules per minute.',
                'features' => ['Multi-jet external spray', 'Air-water-air internal wash cycle', 'Gripper-type conveyor', 'AISI 316L contact parts', 'Programmable wash sequences via HMI'],
                'applications' => ['Sterile ampoule pre-wash', 'Small-volume parenteral lines'],
                'specs' => ['Output' => 'up to 200 ampoules/min', 'Ampoule size' => '1 ml – 25 ml', 'Power' => '2.5 kW', 'Water consumption' => '~200 L/hr'],
                'sort_order' => 2,
                'meta_title' => 'Linear Ampoule Washing Machine — 200 APM cGMP Manufacturer',
                'meta_description' => 'Linear multi-jet ampoule washing machine for 1–25 ml ampoules, up to 200/min. cGMP, SS 316L, manufactured in Ahmedabad.',
            ],
            [
                'category' => 'washing-machines',
                'name' => 'Automatic Rotary Bottle Washing Machine',
                'slug' => 'automatic-rotary-bottle-washing-machine',
                'short_description' => 'Rotary bottle washing machine for PET and glass oral-liquid bottles, up to 120 BPM with programmable wash cycles.',
                'features' => ['SS 316 construction', 'Rotary turret with gripper', 'Multi-stage water + air wash', 'PLC-HMI', 'Tool-free format change'],
                'applications' => ['Oral liquid syrup bottles', 'Cough syrup bottles', 'Eye-drop containers'],
                'specs' => ['Output' => '60–120 BPM', 'Bottle size' => '30 – 500 ml', 'Power' => '3 kW'],
                'sort_order' => 3,
            ],
            [
                'category' => 'washing-machines',
                'name' => 'Rubber Bung Washing Machine',
                'slug' => 'rubber-bung-washing-machine',
                'short_description' => 'Ultrasonic rubber bung washing and sterilising machine for pharmaceutical rubber closures.',
                'features' => ['Ultrasonic agitation', 'Siliconisation stage', 'Automatic load/unload', 'SS 316L drum'],
                'applications' => ['Vial rubber bungs', 'Lyo stoppers'],
                'specs' => ['Batch size' => '5,000 – 20,000 bungs', 'Cycle time' => '60–90 min'],
                'sort_order' => 4,
            ],

            // INJECTABLE LIQUID FILLING
            [
                'category' => 'injectable-liquid-filling',
                'name' => 'Automatic Vial Filling & Rubber Stoppering Machine',
                'slug' => 'automatic-vial-filling-machine',
                'model_code' => 'KMT-AVF-120',
                'short_description' => 'Servo-driven liquid vial filling with integrated rubber stoppering — ±0.5 % fill accuracy, outputs up to 120 vials per minute.',
                'features' => ['Servo peristaltic or piston pumps', 'In-process check-weighing optional', 'Stopper pick-and-place', 'Laminar airflow compatible', 'No-vial no-fill logic', 'Nitrogen purging (pre & post fill)'],
                'applications' => ['Sterile injectable liquids', 'Oncology & biotech', 'Small-volume parenterals'],
                'specs' => ['Output' => '30 – 120 vials/min', 'Fill volume' => '0.5 – 100 ml', 'Fill accuracy' => '±0.5 %', 'No. of fill heads' => '4 / 6 / 8', 'Power' => '3 kW'],
                'is_featured' => true,
                'sort_order' => 1,
                'meta_title' => 'Automatic Vial Filling Machine Manufacturer | ±0.5% Accuracy',
                'meta_description' => 'Automatic vial filling with rubber stoppering — servo pumps, 120 vials/min, ±0.5% accuracy, nitrogen purging. Manufacturer Ahmedabad India.',
            ],
            [
                'category' => 'injectable-liquid-filling',
                'name' => 'Ampoule Filling & Sealing Machine',
                'slug' => 'ampoule-filling-sealing-machine',
                'model_code' => 'KMT-AFS-150',
                'short_description' => 'Linear ampoule filling and tip-sealing machine with nitrogen flushing, pre and post gas purge, for 1–25 ml ampoules.',
                'features' => ['Pre-gas + post-gas nitrogen flushing', 'Tip or pull seal option', 'Servo-metered peristaltic fill', 'Flame-sealing station', 'No-ampoule no-fill'],
                'applications' => ['Oxygen-sensitive injectables', 'Sterile ampoule product lines'],
                'specs' => ['Output' => '60 – 150 ampoules/min', 'Fill volume' => '1 – 25 ml', 'Accuracy' => '±1 %'],
                'is_featured' => true,
                'sort_order' => 2,
            ],
            [
                'category' => 'injectable-liquid-filling',
                'name' => 'Monoblock Vial Filling, Stoppering & Sealing',
                'slug' => 'monoblock-vial-filling-stoppering-sealing',
                'short_description' => 'All-in-one monoblock that fills, stoppers and seals vials on a single turret — ideal for compact cGMP lines.',
                'features' => ['Single-turret monoblock', 'Small footprint', 'Servo indexing', 'Integrated crimp seal'],
                'applications' => ['Small-batch injectable production'],
                'specs' => ['Output' => '30 – 80 vials/min', 'Vial size' => '2 – 30 ml'],
                'sort_order' => 3,
            ],

            // POWDER FILLING
            [
                'category' => 'injectable-powder-filling',
                'name' => 'Dry Injection Powder Filling Machine',
                'slug' => 'dry-injection-powder-filling-machine',
                'model_code' => 'KMT-DPF-120',
                'short_description' => 'Double-head servo auger dry powder filling machine with rubber bunging for dry injectable products. Up to 120 vials per minute.',
                'features' => ['Double-head servo auger dosing', 'In-line check-weighing', 'Nitrogen purge', 'Automatic rubber bung insertion', 'Fill accuracy ±1 %'],
                'applications' => ['Sterile antibiotics', 'Dry injection vials', 'High-potency APIs (with containment)'],
                'specs' => ['Output' => '60 – 120 vials/min', 'Fill weight' => '50 mg – 3 g', 'Accuracy' => '±1 %'],
                'is_featured' => true,
                'sort_order' => 1,
                'meta_title' => 'Dry Injection Powder Filling Machine Manufacturer | 120 VPM',
                'meta_description' => 'Servo auger dry powder filling machine with rubber bunging, 120 vials/min, ±1% accuracy. cGMP, Ahmedabad India.',
            ],
            [
                'category' => 'injectable-powder-filling',
                'name' => 'Dry Syrup Powder Filling Machine',
                'slug' => 'dry-syrup-powder-filling-machine',
                'short_description' => 'Monoblock dry syrup powder filler with capping for oral reconstitutable antibiotics (30 – 200 ml bottles).',
                'features' => ['Auger dosing', 'Integrated capping', 'No-bottle no-fill', 'Dust extraction'],
                'applications' => ['Oral dry syrup antibiotics', 'Paediatric reconstitutable formulations'],
                'specs' => ['Output' => '40 – 80 BPM', 'Bottle' => '30 – 200 ml'],
                'sort_order' => 2,
            ],

            // CAPPING
            [
                'category' => 'capping-sealing',
                'name' => 'ROPP Cap Sealing Machine',
                'slug' => 'ropp-cap-sealing-machine',
                'model_code' => 'KMT-ROPP-180',
                'short_description' => 'Four-head ROPP (Roll-On Pilfer-Proof) cap sealing machine for aluminium caps on oral liquid and injectable bottles.',
                'features' => ['4 / 6 / 8 head options', 'Uniform pilfer-proof thread forming', 'Torque control', 'No-cap no-bottle reject'],
                'applications' => ['Glass/PET bottles with aluminium ROPP caps'],
                'specs' => ['Output' => '60 – 180 BPM', 'Cap size' => '20 mm, 25 mm, 28 mm'],
                'is_featured' => true,
                'sort_order' => 1,
            ],
            [
                'category' => 'capping-sealing',
                'name' => 'Vial Flip-Off Sealing Machine',
                'slug' => 'vial-flip-off-sealing-machine',
                'short_description' => 'High-speed flip-off aluminium seal crimping machine for injectable vials.',
                'features' => ['Single/double turret', 'Cap sorter bowl', 'SS 316 contact parts'],
                'applications' => ['Injectable vials with flip-off seals'],
                'specs' => ['Output' => '60 – 150 vials/min'],
                'sort_order' => 2,
            ],
            [
                'category' => 'capping-sealing',
                'name' => 'Screw Capping Machine',
                'slug' => 'screw-capping-machine',
                'short_description' => 'Inline screw capping machine for plastic closures with magnetic torque heads.',
                'features' => ['Magnetic torque', 'Multiple cap sizes', 'Missing-cap rejection'],
                'applications' => ['Oral syrup bottles', 'Nutraceutical containers'],
                'specs' => ['Output' => '60 – 200 BPM'],
                'sort_order' => 3,
            ],

            // LABELLING
            [
                'category' => 'labelling',
                'name' => 'Automatic Sticker Labelling Machine',
                'slug' => 'automatic-sticker-labelling-machine',
                'short_description' => 'High-speed self-adhesive sticker labelling machine for round bottles, ampoules and vials — optional on-line batch coding.',
                'features' => ['Servo-driven label dispenser', 'Registration ±0.5 mm', 'Integrated batch coder (ink-jet/thermal)', 'Missing-label rejection'],
                'applications' => ['Vials, ampoules, bottles, tubes'],
                'specs' => ['Output' => '60 – 300 units/min', 'Label size' => '10 – 150 mm'],
                'is_featured' => true,
                'sort_order' => 1,
            ],
            [
                'category' => 'labelling',
                'name' => 'Wet-Glue Labelling Machine',
                'slug' => 'wet-glue-labelling-machine',
                'short_description' => 'Rotary wet-glue labelling machine for body + neck labels on round oral-liquid bottles.',
                'features' => ['Rotary indexing turret', 'Dual-label application', 'Glue pot with heater'],
                'applications' => ['Syrups, nutraceuticals, cosmetics'],
                'specs' => ['Output' => '60 – 180 BPM'],
                'sort_order' => 2,
            ],
            [
                'category' => 'labelling',
                'name' => 'Ampoule Sticker Labelling Machine',
                'slug' => 'ampoule-sticker-labelling-machine',
                'short_description' => 'Dedicated self-adhesive labeller for 1 ml–25 ml ampoules with tight registration and on-line batch coding.',
                'features' => ['Gripper conveyor', 'Micro-label dispensing', 'Integrated coder'],
                'applications' => ['Sterile ampoules'],
                'specs' => ['Output' => '60 – 200 ampoules/min'],
                'sort_order' => 3,
            ],

            // INSPECTION
            [
                'category' => 'inspection',
                'name' => 'Manual Ampoule/Vial Inspection Booth',
                'slug' => 'manual-inspection-booth',
                'short_description' => 'Polarised back-lit inspection booth for manual particulate and cosmetic inspection of ampoules and vials.',
                'features' => ['Polarised black + white background', 'Adjustable LED intensity', 'Ergonomic operator station'],
                'applications' => ['100 % visual QC of filled ampoules/vials'],
                'specs' => ['Working area' => '1200 x 600 mm'],
                'sort_order' => 1,
            ],
            [
                'category' => 'inspection',
                'name' => 'Semi-Automatic Vial Inspection Roller',
                'slug' => 'semi-automatic-vial-inspection-roller',
                'short_description' => 'Roller-type semi-automatic inspection station that rotates vials under polarised lighting for operator QC.',
                'features' => ['Variable-speed rollers', 'Twin back-light panels', 'Ejection tray'],
                'applications' => ['Operator-assisted particulate detection'],
                'specs' => ['Throughput' => '60 – 120 vials/min per operator'],
                'sort_order' => 2,
            ],

            // TABLET
            [
                'category' => 'tablet-section',
                'name' => 'Single Rotary Mini Tablet Press',
                'slug' => 'single-rotary-mini-tablet-press',
                'short_description' => '16 / 27 / 35-station single rotary tablet press for R&D and small-batch pharmaceutical tablet production.',
                'features' => ['GMP-compliant guarding', 'Force-feeder', 'Variable speed', 'Tool-free change parts'],
                'applications' => ['R&D tablet development', 'Small-batch production'],
                'specs' => ['Stations' => '16 / 27 / 35', 'Output' => '20,000 – 80,000 tabs/hr', 'Max compression force' => '60 kN'],
                'sort_order' => 1,
            ],
            [
                'category' => 'tablet-section',
                'name' => 'Lab Ball Mill',
                'slug' => 'lab-ball-mill',
                'short_description' => 'Pharmaceutical lab ball mill for size reduction of powders, granules and slurries.',
                'features' => ['SS 316 drum', 'Variable speed', 'Easy discharge'],
                'applications' => ['Size reduction of APIs and excipients'],
                'specs' => ['Batch' => '5 – 50 kg', 'Motor' => '2 HP'],
                'sort_order' => 2,
            ],
            [
                'category' => 'tablet-section',
                'name' => 'Roll Compactor',
                'slug' => 'roll-compactor',
                'short_description' => 'Dry granulation roll compactor for pharmaceutical powders — no water, no solvents.',
                'features' => ['Roll-force control', 'Servo feed screw', 'Integrated granulator'],
                'applications' => ['Dry granulation for OSD'],
                'specs' => ['Output' => '10 – 50 kg/hr'],
                'sort_order' => 3,
            ],

            // OINTMENT
            [
                'category' => 'ointment-cream-plants',
                'name' => 'Vacuum Ointment Manufacturing Plant',
                'slug' => 'vacuum-ointment-manufacturing-plant',
                'short_description' => 'Turnkey vacuum homogeniser-based ointment manufacturing plant with jacketed water & wax phase vessels.',
                'features' => ['Jacketed vessels (water + wax phase)', 'Bottom-entry homogeniser', 'Counter-rotating anchor stirrer', 'Full vacuum operation', 'CIP-compatible'],
                'applications' => ['Ointments, creams, gels, lotions'],
                'specs' => ['Capacity' => '50 – 2000 L', 'Vacuum' => '–0.9 bar'],
                'is_featured' => true,
                'sort_order' => 1,
            ],

            // SYRUP
            [
                'category' => 'liquid-syrup-plants',
                'name' => 'Liquid Syrup Manufacturing Plant',
                'slug' => 'liquid-syrup-manufacturing-plant',
                'short_description' => 'Complete liquid syrup manufacturing plant with sugar syrup preparation vessel, jacketed manufacturing tank and storage vessel.',
                'features' => ['Sugar syrup prep with agitator', 'Jacketed manufacturing vessel', 'In-line filter press', 'Transfer pumps', 'CIP/SIP compatible'],
                'applications' => ['Oral liquid syrups', 'Cough syrups', 'Nutraceutical liquids'],
                'specs' => ['Capacity' => '100 – 3000 L'],
                'sort_order' => 1,
            ],

            // CONVEYOR
            [
                'category' => 'packing-conveyors',
                'name' => 'Stainless-Steel Slat Conveyor',
                'slug' => 'ss-slat-conveyor',
                'short_description' => 'SS slat-chain conveyor for connecting filling, capping, labelling and packaging stations in pharma lines.',
                'features' => ['SS 304 frame', 'Variable speed', 'Tool-free belt change', 'Side guides adjustable'],
                'applications' => ['Line connection between machines'],
                'specs' => ['Length' => '2 – 6 m', 'Speed' => '0 – 25 m/min'],
                'sort_order' => 1,
            ],
            [
                'category' => 'packing-conveyors',
                'name' => 'Rotary Turn Table',
                'slug' => 'rotary-turn-table',
                'short_description' => 'SS rotary turn table for bottle accumulation at infeed or outfeed of filling lines.',
                'features' => ['800/1000/1200 mm diameter', 'Variable speed', 'SS 304 top plate'],
                'applications' => ['Infeed / outfeed accumulation'],
                'specs' => ['Diameter' => '800 – 1200 mm'],
                'sort_order' => 2,
            ],

            // PHARMA FURNITURE
            [
                'category' => 'pharma-furniture',
                'name' => 'Dynamic Pass Box with HEPA',
                'slug' => 'dynamic-pass-box-hepa',
                'short_description' => 'Double-door dynamic pass box with HEPA filter for material transfer between cleanroom areas.',
                'features' => ['HEPA H14', 'Interlocked doors', 'UV light option', 'SS 304 construction'],
                'applications' => ['Material transfer between cleanroom zones'],
                'specs' => ['Chamber' => '600 x 600 x 600 mm'],
                'sort_order' => 1,
            ],
            [
                'category' => 'pharma-furniture',
                'name' => 'Garment Storage Cabinet',
                'slug' => 'garment-storage-cabinet',
                'short_description' => 'SS 304 / 316 garment storage cabinet with hanger rail and perforated shelves for cleanroom gown storage.',
                'features' => ['Hanger rail', 'Perforated shelves', 'Double-door access'],
                'applications' => ['Cleanroom gowning areas'],
                'sort_order' => 2,
            ],

            // TRAY DRYER
            [
                'category' => 'tray-dryers-storage',
                'name' => 'Hot-Air Tray Dryer',
                'slug' => 'hot-air-tray-dryer',
                'short_description' => 'Hot-air tray dryer with digital PID temperature control for drying pharmaceutical granules and powders.',
                'features' => ['Digital PID control', 'Stainless trays (24/48/96)', 'Timer + alarm', 'Air circulation fans'],
                'applications' => ['Granule drying', 'Powder drying'],
                'specs' => ['Trays' => '24 / 48 / 96', 'Temperature' => 'Ambient to 150 °C'],
                'sort_order' => 1,
            ],
            [
                'category' => 'tray-dryers-storage',
                'name' => 'SS Storage Vessel',
                'slug' => 'ss-storage-vessel',
                'short_description' => 'Polished SS 316L storage vessel with dish end, top manhole, sanitary fittings and optional jacketing.',
                'features' => ['SS 316L polished', 'Sanitary fittings', 'Optional jacket'],
                'applications' => ['Syrup storage', 'DM/WFI water storage'],
                'specs' => ['Capacity' => '100 – 5000 L'],
                'sort_order' => 2,
            ],

            // CHANGE PARTS
            [
                'category' => 'change-parts',
                'name' => 'Format Parts & Change-Over Kits',
                'slug' => 'format-parts-changeover-kits',
                'short_description' => 'Custom-made change-part kits for every Kailash machine, enabling fast validated size change-overs.',
                'features' => ['Star-wheels', 'Guide rails', 'Timing screws', 'Pick-and-place grippers'],
                'applications' => ['Fast container size change-over'],
                'sort_order' => 1,
            ],

            // OTHER
            [
                'category' => 'other-machinery',
                'name' => 'Rubber Stopper Processor',
                'slug' => 'rubber-stopper-processor',
                'short_description' => 'Integrated rubber stopper washing, siliconising and sterilising system for injectable lines.',
                'features' => ['Ultrasonic wash', 'Siliconisation cycle', 'Steam sterilisation', 'Validated cycles'],
                'applications' => ['Injectable rubber stopper preparation'],
                'sort_order' => 1,
            ],
        ];

        foreach ($products as $p) {
            $category = Category::where('slug', $p['category'])->firstOrFail();
            $slug = $p['slug'];
            unset($p['category']);

            // Build long_description if absent
            if (empty($p['long_description'])) {
                $p['long_description'] = $this->buildLongDescription($p['name'], $p['short_description'], $p['features'] ?? [], $p['applications'] ?? []);
            }
            if (empty($p['meta_title'])) {
                $p['meta_title'] = $p['name'].' Manufacturer | Kailash Machine Tools';
            }
            if (empty($p['meta_description'])) {
                $p['meta_description'] = substr($p['short_description'], 0, 300);
            }

            Product::updateOrCreate(
                ['slug' => $slug],
                array_merge($p, ['category_id' => $category->id, 'slug' => $slug]),
            );
        }
    }

    private function buildLongDescription(string $name, string $short, array $features, array $applications): string
    {
        $featText = empty($features) ? '' : "\n\n**Key Features**\n- ".implode("\n- ", $features);
        $appText = empty($applications) ? '' : "\n\n**Applications**\n- ".implode("\n- ", $applications);

        return "Kailash Machine Tools manufactures and exports the {$name} — {$short} Built in our Ahmedabad (Gujarat, India) facility with SS 316L pharmaceutical-grade construction, PLC-HMI controls, and full cGMP compliance. Every machine ships with FAT certification, installation &amp; on-site commissioning, and IQ/OQ/PQ validation support.{$featText}{$appText}\n\n**Compliance &amp; Documentation**\n- cGMP compliant build\n- AISI 316L contact parts\n- Full documentation: design qualification, FAT protocol, IQ/OQ/PQ\n- CE-ready variants available for export\n\n**Why Kailash Machine Tools**\nSince 1991, we have delivered injectable &amp; packaging line machinery to pharmaceutical manufacturers across India, the Middle East, Southeast Asia and Africa. Formerly operating as Shree Ganesh Pharmatech, we combine three decades of precision engineering with modern servo-automation to give you equipment that runs reliably for decades. Request a quotation for this {$name} today.";
    }
}
