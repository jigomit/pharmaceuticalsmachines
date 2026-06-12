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
                'name' => 'Automatic Tunnel Type Rotary Vial Washing Machine',
                'slug' => 'rotary-vial-washing-machine',
                'model_code' => 'KMTRVW-120',
                'short_description' => 'Automatic tunnel type rotary vial washing machine with 4 water & 3 air washes, suitable for 2 ml to 100 ml vials (16.5–52 mm dia), star-wheel indexing, and optional pumping station.',
                'features' => ['4 water & 3 air wash complete flexibility', 'All contact parts SS 316, frame & covers SS 304', 'Nozzles enter container during wash cycle (cGMP)', 'Low water consumption (1–4.8 L/min)', 'Quick changeover with minimum tools', 'Infeed worm inverts containers to neck-down position', 'Star-wheel carries containers through indexed wash stations', 'Washed containers re-inverted to neck-up for tunnel feed', 'Optional: pumping station, inspection station, loading platform'],
                'applications' => ['Injectable vials (2 ml – 100 ml)', 'Bottles (15 ml – 100 ml)', 'Lyophilised product containers', 'Pre-sterilisation vial wash'],
                'specs' => ['Model' => 'KMTRVW-120', 'Output' => '30–150 VPM', '2ml vials (16.5mm)' => '60–80 VPM', 'Vial size' => '2 ml to 100 ml (16.5–52 mm dia)', 'Bottle size' => '15 ml to 100 ml', 'Power' => '1.00 HP, 440V, 3 Phase, 4 Wire, 50Hz', 'Washing cycle' => 'R.C – AIR – D.M – AIR – D.M – AIR – WFI – AIR', 'Water consumption' => '1 to 4.8 L/min', 'Overall dimension' => '2600mm (L) x 1370mm (W) x 1850mm (H) + 850+100mm tunnel', 'Net weight' => '750 kg', 'Gross weight' => '1000 kg'],
                'is_featured' => true,
                'sort_order' => 1,
                'meta_title' => 'Rotary Vial Washing Machine Manufacturer India | 150 VPM cGMP',
                'meta_description' => 'Automatic tunnel type rotary vial washing machine — 150 vials/min, SS 316L contact parts, 4 water & 3 air washes, cGMP compliant. Manufactured in Ahmedabad India.',
            ],
            [
                'category' => 'washing-machines',
                'name' => 'Automatic Linear Vial Washing Machine',
                'slug' => 'linear-ampoule-washing-machine',
                'model_code' => 'SGP-VW 120 - 240',
                'short_description' => 'Automatic linear vial washing machine with three-cycle rinsing flexibility, 3 inner + 1 outer + 1 air wash cycle, SS 316 water-contact parts, and output from 6000 to 12000 containers per hour.',
                'long_description' => "Three-cycle rinsing allows flexibilities of various wash cycles such as fresh water, demineralized water, etc. as per the rinsing requirement of bottle. All the pumps are made of SS and all the water contact parts are made of SS 316 on a heavy base of SS structure. The tunnel design maintains separation between feeding zone and discharge zone of the cleaned containers. All the mechanical drives are separated and isolated from the washing zone. Approved materials only are used for construction, together with a careful choice of components, taking into consideration all aspects of sanitation and consequently complying with pharmaceutical G.M.P. requirements. The quality of rinsing is ensured through 3 sets of inner and 2 sets of outer nozzles accurately placed to direct the jet at the centre of the bottle so the bottle comes out with water totally drained and minimum droplets of water.\n\n**Special Features Of Automatic Linear Vial Washing Machine**\n- High-pressure spray nozzles ensure perfect wash of bottles\n- Interchangeable wash sequences\n- Totally fabricated from SS materials, including the basic frame\n- No change parts required for washing round bottles, saving changeover time\n- Change parts required only for flat bottles or neck-size changes\n- All parts coming in contact with washing zones / jets are made from SS 316 materials\n- Suitable for handling round and flat glass bottles with change parts\n- Water re-cycling arrangement possible as per customer need\n- Totally rigid machine for continuous long working hours without trouble\n- Higher capacity centrifugal pump to wash bigger containers\n- Third tank and pump can be fitted optionally\n\n**Technical Specification**\n- Model: SGP-VW 120 - 240\n- Production Output (per hour): 6000 - 12000\n- No. of Pocket: 10 / 20 / 26\n- Main Motor: 1 HP / 415 Volts / 50 Hz\n- Pump Two Nos.: 1 HP x 2 = 2 HP / 415 Volts / 50 Hz\n- Conveyor: 0.5 HP / 415 Volts / 50 Hz\n- Electrical Heater: 3 kW\n- Tank Capacity: 50 Ltrs. S.S. 316\n- Wash Cycle: 3 Inner + 1 Outer + 1 Air Cycle\n- Timing: 3.5 second for each wash + 1.5 second for travelling\n- Water / Air Consumption: 400 Ltrs./Hr./Cycle / Pressure 2.5 Kg @ 20 CFM\n- Specification can be changed as per customer's requirement",
                'features' => [
                    'Three-cycle rinsing flexibility for fresh water, demineralized water, and other wash cycles',
                    'All pumps are made of stainless steel',
                    'All water-contact parts are made of SS 316 on a heavy SS base structure',
                    'Tunnel design separates feeding zone from discharge zone',
                    'Mechanical drives are separated and isolated from the washing zone',
                    '3 inner and 2 outer nozzles accurately direct the jet at the bottle centre',
                    'High-pressure spray nozzles ensure perfect bottle washing',
                    'Interchangeable wash sequences',
                    'Totally fabricated from SS materials including the basic frame',
                    'No change parts required for round bottles',
                    'Suitable for round and flat glass bottles with change parts',
                    'Water re-cycling arrangement possible as per customer need',
                    'Rigid machine suitable for continuous long operation',
                    'Higher capacity centrifugal pump for bigger containers',
                    'Optional third tank and pump',
                ],
                'applications' => ['Round glass bottles', 'Flat glass bottles', 'Pharmaceutical vial washing lines', 'Bottle rinsing before filling'],
                'specs' => ['Model' => 'SGP-VW 120 - 240', 'Production Output (per hour)' => '6000 - 12000', 'No. of Pocket' => '10 / 20 / 26', 'Main Motor' => '1 HP / 415 Volts / 50 Hz', 'Pump Two Nos.' => '1 HP x 2 = 2 HP / 415 Volts / 50 Hz', 'Conveyor' => '0.5 HP / 415 Volts / 50 Hz', 'Electrical Heater' => '3 kW', 'Tank Capacity' => '50 Ltrs. S.S. 316', 'Wash Cycle' => '3 Inner + 1 Outer + 1 Air Cycle', 'Timing' => '3.5 second for each wash + 1.5 second for travelling', 'Water / Air Consumption' => '400 Ltrs./Hr./Cycle / Pressure 2.5 Kg @ 20 CFM'],
                'sort_order' => 2,
                'meta_title' => 'Automatic Linear Vial Washing Machine Manufacturer | SGP-VW 120 - 240',
                'meta_description' => 'Automatic linear vial washing machine with 6000 - 12000 per hour output, SS 316 water-contact parts, 3 inner + 1 outer + 1 air cycle, and cGMP-compliant construction.',
            ],
            [
                'category' => 'washing-machines',
                'name' => 'Semi-Automatic Rotary Bottle Washing Machine',
                'slug' => 'automatic-rotary-bottle-washing-machine',
                'model_code' => 'SBRW-16/32/64/96',
                'short_description' => 'Geneva mechanism rotary bottle washing machine with 96 jet holders, four inner + one outer wash cycles, up to 150 BPM, with SS 304 tanks and higher capacity centrifugal pumps.',
                'features' => ['Geneva mechanism drive', 'Four inner (incl. one air wash) & one outer wash', 'Sequence of washes to customer choice', 'Stationary nozzles eliminate contamination & bottle neck chipping', 'Easy loading and unloading', 'Individual solenoid valve for each washing sequence', 'Higher capacity centrifugal pumps for bigger bottles (500 & 1000 ml)', 'Bottle guide system for lightweight bottles', 'Pumps & tanks on portable stand for easy maintenance', 'Separate panel control to avoid short circuit', 'SS glycerin-fill pressure meter'],
                'applications' => ['Oral liquid syrup bottles', 'Pharmaceutical glass bottles', 'PET bottles up to 1000 ml'],
                'specs' => ['Model' => 'SBRW-16/32/64/96', 'Output' => 'Up to 150 BPM', 'Bottle holders' => '96 jet', 'Direction' => 'Clockwise', 'Main motor' => '0.5 HP / 415V / 50Hz', 'Pumps' => '1 HP x 2 = 2 HP / 415V / 50Hz', 'Electric heater' => '3 kW', 'Tank capacity' => '75 Ltrs SS 304 (2 nos.)', 'Wash cycle' => '4 Inner + 1 Outer', 'Working height' => '860–910 mm', 'Machine dimensions' => '1500 x 1750 x 1300 mm', 'Net weight' => '550 kg', 'Gross weight' => '900 kg'],
                'sort_order' => 3,
            ],
            [
                'category' => 'washing-machines',
                'name' => 'Rubber Bung Washing Machine',
                'slug' => 'rubber-bung-washing-machine',
                'model_code' => 'KMT-RBW',
                'short_description' => 'PLC-based rubber bung washing machine with SS 316L contact parts, compressed air sparger fluidisation, optional electric/steam heating, built to ASME & cGMP pharma standards.',
                'features' => ['Contact parts AISI SS 316/316L, inner basket SS 304', 'Central SS 316 piping for robust cleaning', 'Compressed air via sparger for high-velocity wash', 'Optional electric heater or steam coil for hot-water washing', '1" & 1½″ quick-action drain valve for rapid cycle turnover', 'Swiss design eliminates stagnant areas', 'Triclover fittings for easy cleaning', 'Silicone seals & gaskets', 'PLC-based controls with fully automatic cycles', 'HMI interface for user programming'],
                'applications' => ['Vial rubber bungs', 'Lyo stoppers', 'Rubber closures for injectable lines'],
                'specs' => ['Capacity' => '10L to 200L per batch', 'Material (contact)' => 'SS 316L', 'Material (non-contact)' => 'SS 304', 'Control System' => 'PLC with/without HMI', 'Utilities' => 'Compressed Air, D.M, WFI', 'Siliconisation' => 'Optional'],
                'sort_order' => 4,
            ],
            [
                'category' => 'washing-machines',
                'name' => 'Multi Jet Ampoule & Vial Washing Machine',
                'slug' => 'multi-jet-ampoule-vial-washing-machine',
                'model_code' => 'KAVW-340',
                'short_description' => 'Multi-jet needle plate ampoule and vial washing machine with positive pressurised jets, acrylic top cover, inline polycarbonate filter housing, and SS contact parts for cGMP washing.',
                'features' => ['Positive & pressurised jets through washing needles', 'Sound design pressure tank for reverse & continuous supply of wash media', 'Both internal & external washing for absolutely clean ampoules/vials', 'Acrylic top cover for clear view of washing events', 'Inline polycarbonate housing with PP replaceable filter cartridge (5 or 10 micron)', 'All contact parts of washing media are SS', 'Auto-stop when acrylic cover is lifted; auto-restart on close'],
                'applications' => ['Ampoule washing (1–25 ml)', 'Vial washing (2–100 ml)', 'Pre-sterilisation container wash'],
                'specs' => ['Multi jet needles' => '340/240/189/149/100/53', 'Ampoule size' => '1 ml to 25 ml', 'Vial size' => '2 ml to 100 ml', 'Washing cycle' => 'AIR – D.M – AIR – D.M – AIR – WFI – AIR', 'Power' => '230V, 50Hz Single Phase', 'Machine dimensions' => '1000mm (L) x 1100mm (W) x 1100mm (H)', 'Net weight' => '120 kg', 'Gross weight' => '250 kg'],
                'sort_order' => 5,
            ],
            [
                'category' => 'washing-machines',
                'name' => 'Automatic Round Bottle Sticker Labelling Machine',
                'slug' => 'automatic-round-bottle-sticker-labelling-machine',
                'model_code' => null,
                'short_description' => 'High-speed self-adhesive sticker labelling machine for round bottles, ampoules and vials with optional on-line batch coding.',
                'features' => ['Servo-driven label dispenser', 'Registration ±0.5 mm', 'Integrated batch coder (ink-jet/thermal)', 'Missing-label rejection'],
                'applications' => ['Vials', 'Ampoules', 'Bottles', 'Tubes'],
                'specs' => ['Output' => '60 – 300 units/min', 'Label size' => '10 – 150 mm'],
                'sort_order' => 6,
                'meta_title' => 'Automatic Round Bottle Sticker Labelling Machine Manufacturer | Kailash Machine Tools',
                'meta_description' => 'High-speed self-adhesive sticker labelling machine for round bottles, ampoules and vials with optional on-line batch coding.',
            ],
            [
                'category' => 'washing-machines',
                'name' => 'AUTOMATIC TUNNEL TYPE ROTARY VIAL WASHING MACHINE',
                'slug' => 'automatic-tunnel-type-rotary-vial-washing-machine',
                'model_code' => 'KMTRVW - 120',
                'short_description' => 'Automatic tunnel type rotary vial washing machine with output from 30 to 150 VPM, 2 ml vials at 60–80 VPM, internal/external washes, and optional pumping, inspection, and loading stations.',
                'long_description' => "Automatic tunnel type rotary vial washing machine designed for pharmaceutical vial and bottle washing applications.\n\n**Technical Details**\n- Model: KMTRVW - 120\n- Output: 30 – 150 VPM\n- Input: 2 ML (16.5 MM): 60 – 80 VPM\n- Power Supply: 1.00 HP, 440 Volt, 3 Phase, 4 Wire System, 50 Hz\n- Optional Accessories: 3 pumps pumping station, vial / bottle inspection station, vial / bottle loading platform\n- Overall Dimension: 2600 mm (L) x 1370 mm (W) x 1850 mm (H), tunnel height 850 + 100 mm\n- Specification: 5 / 10 / 30 ml (20 – 40 mm dia) 60 – 90 VPM optional; 50 ml vial – 100 ml vial (52 dia) 40 – 60 VPM\n- Net Weight: 750 KGS\n- Gross Weight: 1000 KGS\n- Change Parts: Infeed worm, infeed star wheel, infeed inverter, exit feed worm, exit star wheel, exit inverter\n\n**Washing Cycle**\nInternal / External washes || Washing Media || Consumption liters/min. (depending on vial size)\nR.C Wash – Air – D.M – Air – D.M – Air – WFI – Air\nConsumption liters/min. (depending on vial size): 1 to 4.8 ltr per minute",
                'features' => [
                    'Output 30 – 150 VPM',
                    '2 ml vial input at 60 – 80 VPM',
                    'Internal / external washing system',
                    'R.C Wash – Air – D.M – Air – D.M – Air – WFI – Air cycle',
                    'Consumption 1 to 4.8 ltr per minute depending on vial size',
                    'Optional 3 pumps pumping station',
                    'Optional vial / bottle inspection station',
                    'Optional vial / bottle loading platform',
                    'Change parts include infeed and exit worms, star wheels, and inverters',
                    'Suitable for 5 / 10 / 30 ml and 50 / 100 ml vial ranges',
                ],
                'applications' => [
                    '2 ml to 100 ml vials',
                    'Bottle washing lines',
                    'Pharmaceutical rotary vial washing',
                    'Tunnel-fed sterile washing lines',
                ],
                'specs' => [
                    'Model' => 'KMTRVW - 120',
                    'Output' => '30 – 150 VPM',
                    'Input' => '2 ML (16.5 MM): 60 – 80 VPM',
                    'Power Supply' => '1.00 HP, 440 Volt, 3 Phase, 4 Wire System, 50 Hz',
                    'Optional Accessories' => '3 pumps pumping station, vial / bottle inspection station, vial / bottle loading platform',
                    'Overall Dimension' => '2600 mm (L) x 1370 mm (W) x 1850 mm (H), tunnel height 850 + 100 mm',
                    'Specification' => '5-10-30 ML (20-40 MM DIA) 60-90 VPM optional; 50 ML VIAL – 100 ML VIAL (52 DIA) 40 – 60 VPM',
                    'Net Weight' => '750 KGS',
                    'Gross Weight' => '1000 KGS',
                    'Change Parts' => 'Infeed worm, infeed star wheel, infeed inverter, exit feed worm, exit star wheel, exit inverter',
                    'Washing Cycle' => 'R.C Wash – Air – D.M – Air – D.M – Air – WFI – Air',
                    'Consumption' => '1 to 4.8 ltr per minute (depending on vial size)',
                ],
                'sort_order' => 7,
                'meta_title' => 'Automatic Tunnel Type Rotary Vial Washing Machine Manufacturer | KMTRVW-120',
                'meta_description' => 'Automatic tunnel type rotary vial washing machine KMTRVW-120 with 30–150 VPM output, internal/external washes, WFI cycle, and optional pumping and inspection stations.',
            ],
            [
                'category' => 'washing-machines',
                'name' => 'Automatic Rotary Ampoule & Vial Washing Machine',
                'slug' => 'automatic-rotary-ampoule-vial-washing-machine',
                'model_code' => '120 / 240',
                'short_description' => 'Automatic rotary ampoule and vial washing machine with 40 or 60 grippers, multijet internal and external washing, independent wash circuits, and discharge to sterilising tunnel. Available in up to 80-100 and 100-200 containers per minute configurations.',
                'long_description' => "Kailash Machine Tools manufactures and exports the Automatic Rotary Ampoule & Vial Washing Machine for sterile ampoule and vial washing lines.\n\n**Ampoule/Vials Working Description**\nAmpoule / vials can be fed on to an in feed conveyor or alternatively a turntable from where they are fed to a star-wheel and delivered to a revolving conveying system consisting of 40 or 60 grippers equally spaced. V-grippers are mounted on the circumference of the gripper ring, which rotates around a vertical axis. The horizontal rotation of the vial through 180° during the in feed as well as the opening and closing of the grippers is cam-controlled. Vials are passed through the cleaning station upside down. At the individual stations, spray tubes travel synchronized with vials, then enter the vials whose orifices are exactly centered. The spray tubes follow the continuously moving grippers from the start to the finish of a working station and retract.\n\n**Operation**\nAmpoule / vials pushed from in feed tray and then move on wire woven conveyor belt, which align the vial in correct position to enter into the carrier pocket with the help of oscillating guide rails. The oscillating arm delivers the vial inside the pocket in mouth-down position over spraying nozzles. Multijet sprayers fixed at the top cause the total external and internal surface to be washed. To avoid any possible cross contamination between two different waters, each washing station is provided with an independent circuit. The carrier pocket moves with indexing motion. When the baskets have completed their motion the needles are lifted, penetrate the vials, spray jets of water or compressed air, and then return down. The baskets then advance by one station. Each station passes through the washing cycles selected. The duly washed vials are then delivered to the out feed tray with neck opening upward and then automatically reordered to sterilizing tunnel with back pressure.\n\n**Technical Highlights**\n- Programmable logic control system with HMI available\n- Safety cabinet with doors available as optional accessory\n- Three water tanks with centrifugal pumps\n- 440 V, 3 Phase, 50 Hz, 4 wire system\n- Air utility: 20 CFM\n- Water consumption: 200 to 500 litres per hour depending upon ampoule size",
                'features' => [
                    '40 or 60 grippers on revolving conveying system',
                    'Cam-controlled 180° rotation during infeed with synchronized gripper opening and closing',
                    'Multijet external and internal washing with spray tube tracking',
                    'Containers are washed upside down for complete cleaning coverage',
                    'Independent water circuits at each washing station to avoid cross contamination',
                    'Indexing carrier pocket system with oscillating guide rails',
                    'Automatic discharge with neck-up orientation to tray or sterilizing tunnel',
                    'Programmable logic control system with HMI available',
                    'Safety cabinet with doors available as optional accessory',
                    'Three water tanks with centrifugal pumps',
                ],
                'applications' => [
                    '1 ml to 20 ml ampoules',
                    '2 ml to 100 ml vials (20 mm neck)',
                    'Sterile injectable washing lines',
                    'Tunnel-fed ampoule and vial preparation',
                ],
                'specs' => [
                    'Model' => '120 / 240',
                    'Production output' => 'Up to 80-100/min (120) / Up to 100-200/min (240)',
                    'Ampoule size' => '1 ml to 20 ml (120) / 1 ml to 10 ml (240)',
                    'Vial size' => '2 ml to 100 ml vials, 20 mm neck (120) / 2 ml to 10 ml vials, 20 mm neck (240)',
                    'Power load' => '4 H.P. (120) / 5.5 H.P. (240)',
                    'Power supply' => '440 Volts, 3 Phase, 50 Hertz, 4 wire system',
                    'Utility air' => '20 CFM',
                    'Water consumption' => '200 to 500 litres/hour depending upon ampoule size',
                    'Water tank & pump' => '3 nos. each with 25 litres capacity and centrifugal pump',
                    'Machine dimension' => '1400 x 1200 x 1300 mm approx. (120) / 1600 x 1400 x 1300 mm approx. (240)',
                    'Overall dimension' => '2500 x 2000 x 1300 mm approx. (120) / 2450 x 2000 x 1300 mm approx. (240)',
                    'Net weight' => '700 kg approx. (120) / 900 kg approx. (240)',
                    'Optional accessories' => 'Programmable Logic Control system with HMI, safety cabinet with doors',
                ],
                'sort_order' => 8,
                'meta_title' => 'Automatic Rotary Ampoule & Vial Washing Machine Manufacturer | 120 / 240',
                'meta_description' => 'Automatic rotary ampoule and vial washing machine with 40 or 60 grippers, multijet washing, independent wash circuits, and up to 200 containers per minute.',
            ],
            [
                'category' => 'washing-machines',
                'name' => 'High-Speed Linear Vial Washing Machine',
                'slug' => 'high-speed-linear-vial-washing-machine',
                'model_code' => 'SGP-VW-120-240',
                'short_description' => 'Latest sophisticated PLC / microprocessor controlled label dispensing system with user-friendly sensing interface for label and product, suitable for round ampoule round objects, with output up to 150 - 300 containers per minute depending on product diameter and label size.',
                'long_description' => "Kailash Machine Tools offers the High-Speed Linear Vial Washing Machine configured with the product details provided for high-speed labelling applications.\n\n**Product Overview**\nLatest sophisticated PLC / Microprocessor controlled Label Dispensing system with user friendly Sensing interface for Label and Product with choice of Stepper or Servo Drive. The Machine is suitable for Labelling on Round Ampoule round objects and is capable of Labelling up to 150 - 300 containers per minute depending on products diameter and label size. Suitable for Overlap Labelling.\n\n**Key Functional Features**\n- No Container - No Label sensor provided to avoid wastage of labels\n- PLC based operation and VFD for speed control\n- Digital counter provided for total labeled containers\n- Inbuilt real-time speed indicator shows actual machine speed\n- Label Roll End machine stop system provided\n- No need of any change parts during changeover of size\n- In compliance with cGMP\n\n**Technical Specification**\n- Production Rate: 50 to 300 containers/min depending upon label length and container diameter\n- Dispensing Speed: 5 mtr/minute\n- Power Specification: 0.5 H.P, 220 Volts, 1 Phase, 50 Hz\n- Container Diameter: 16 mm to 80 mm\n- Label Size Length: 20 mm to unlimited\n- Label Size Width: 10 mm to 90 mm\n\nTechnical details, specification and designs are subject to change without prior notice.",
                'features' => [
                    'Latest sophisticated PLC / microprocessor controlled label dispensing system',
                    'User-friendly sensing interface for label and product',
                    'Choice of stepper or servo drive',
                    'Suitable for overlap labelling',
                    'No Container - No Label sensor to avoid wastage of labels',
                    'PLC based operation with VFD for speed control',
                    'Digital counter for total labeled containers',
                    'Inbuilt real-time speed indicator',
                    'Label roll end machine stop system',
                    'No change parts required during size changeover',
                    'cGMP compliant build',
                ],
                'applications' => [
                    'Round ampoules',
                    'Round objects',
                    'High-speed labelling applications',
                ],
                'specs' => [
                    'Production rate' => '50 to 300 containers/min depending upon label length & container dia.',
                    'Dispensing speed' => '5 mtr/minute',
                    'Power specification' => '0.5 H.P, 220 Volts, 1 Phase, 50 Hz',
                    'Container dia' => '16 mm to 80 mm',
                    'Label size length' => '20 mm to unlimited',
                    'Label size width' => '10 mm to 90 mm',
                ],
                'sort_order' => 9,
                'meta_title' => 'High-Speed Linear Vial Washing Machine Manufacturer | Kailash Machine Tools',
                'meta_description' => 'PLC / microprocessor controlled labelling system for round ampoules and round objects with 50 to 300 containers per minute output and cGMP compliant design.',
            ],
            [
                'category' => 'washing-machines',
                'name' => 'Vial Outer Washing Machine',
                'slug' => 'vial-outer-washing-machine',
                'model_code' => null,
                'short_description' => 'Automatic vial outer washing machine for cleaning the external surface of glass and plastic vials, with 60 - 240 vials per minute output and SS 304 / SS 316 stainless steel construction.',
                'long_description' => "The Vial Outer Washing Machine is designed for automatic outer surface cleaning of pharmaceutical vials before downstream handling, packing, or labelling operations.\n\n**Product Overview**\n- Machine Type: Automatic Vial Outer Washing Machine\n- Application: Outer Surface Cleaning of Vials\n- Production Capacity: 60 - 240 Vials/min\n- Material: SS 304 / SS 316 Stainless Steel\n- Operation: Automatic\n- Power Supply: 220V / 415V\n- Frequency: 50 Hz\n- Container Type: Glass / Plastic Vials\n\n**Key Benefits**\n- Designed for dedicated outer surface cleaning of vials\n- Suitable for both glass and plastic vial formats\n- Built in stainless steel for pharmaceutical use\n- Automatic operation for consistent cleaning performance\n- Suitable for integration into vial handling and packaging lines",
                'features' => [
                    'Automatic outer surface cleaning of vials',
                    'Suitable for glass and plastic vials',
                    'SS 304 / SS 316 stainless steel construction',
                    'Output range from 60 to 240 vials per minute',
                    'Designed for pharmaceutical line integration',
                ],
                'applications' => [
                    'Outer surface cleaning of pharmaceutical vials',
                    'Glass vial handling lines',
                    'Plastic vial handling lines',
                ],
                'specs' => [
                    'Machine Type' => 'Automatic Vial Outer Washing Machine',
                    'Application' => 'Outer Surface Cleaning of Vials',
                    'Production Capacity' => '60 - 240 Vials/min',
                    'Material' => 'SS 304 / SS 316 Stainless Steel',
                    'Operation' => 'Automatic',
                    'Power Supply' => '220V / 415V',
                    'Frequency' => '50 Hz',
                    'Container Type' => 'Glass / Plastic Vials',
                ],
                'sort_order' => 10,
                'meta_title' => 'Vial Outer Washing Machine Manufacturer | Kailash Machine Tools',
                'meta_description' => 'Automatic vial outer washing machine for outer surface cleaning of glass and plastic vials with 60 - 240 vials/min output and SS 304 / SS 316 construction.',
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
            [
                'category' => 'injectable-liquid-filling',
                'name' => 'Automatic Servo Bottle Liquid Filling Machine Multi Head',
                'slug' => 'automatic-servo-bottle-liquid-filling-machine',
                'model_code' => 'KMTBF-2/4/6/8/12',
                'short_description' => 'Fully automatic servo-based bottle liquid filling machine with 2 to 12 nozzle heads, PLC-HMI control, bottom-up or top filling, 10 ml to 5000 ml fill range.',
                'features' => ['Servo dosing principle for high accuracy & efficiency', 'Sturdy fabricated steel base, stress relieved & machined', 'Bottom-up filling for foam-prone liquids', 'PLC & HMI (Delta make)', 'Servo motors 750W (Delta make)', 'Height adjustable conveyor (860–910 mm)', 'No change parts required'],
                'applications' => ['Oral liquid bottles', 'Syrup filling', 'Pharmaceutical liquid bottles', 'Nutraceutical bottles'],
                'specs' => ['Model' => 'KMTBF-2/4/6/8/12', 'Output' => '4200–4800 bottles/hr', 'Fill range' => '10 ml to 5000 ml', 'Nozzle heads' => '2/4/6/8/12', 'Servo motor' => '750W Delta x 4', 'PLC & HMI' => 'Delta', 'Conveyor' => '0.5 HP / 415V / 50Hz', 'Machine dimensions' => '3045mm (L) x 1200mm (W) x 1610mm (H)', 'Net weight' => '900 kg', 'Gross weight' => '1400 kg'],
                'sort_order' => 4,
            ],
            [
                'category' => 'injectable-liquid-filling',
                'name' => 'Automatic Servo Vials Liquid Filling Multi Head Machine',
                'slug' => 'automatic-servo-vials-liquid-filling-machine',
                'model_code' => 'SGPVFS-100/200/300',
                'short_description' => 'Servo-based multi-head vial liquid filling machine with vacuum wheel type pick-and-place stoppering, 4/6/8/12 servo pumps, for 2 ml to 100 ml vials at up to 250 VPM.',
                'features' => ['Servo-based filling system with PLC HMI', 'Vacuum wheel type pick & place stoppering', 'SS 316L product contact parts', 'SS 304 non-contact parts', '4/6/8/12 servo pump heads', 'Single or double dosage capability'],
                'applications' => ['Sterile injectable liquids', 'Small & large volume parenterals', 'Biotech vials'],
                'specs' => ['Model' => 'SGPVFS-100/200/300', 'Speed' => 'Up to 250 vials/min', 'Filling range' => '2 ml to 100 ml (single), 50/100 ml (double)', 'Pump sizes' => '2 ml to 100 ml', 'Vial size' => '2 ml to 100 ml', 'Stopper size' => '13mm, 20mm, 32mm', 'Power' => '415V, 3 Phase, 50Hz', 'Overall dimension' => '3200mm (L) x 1000mm (W) x 2600mm (H) with LAF', 'Net weight' => '200 kg'],
                'sort_order' => 5,
            ],
            [
                'category' => 'injectable-liquid-filling',
                'name' => 'Automatic Eye Drop Filling Sealing Machine',
                'slug' => 'automatic-eye-drop-filling-sealing-machine',
                'model_code' => 'KMT-EDF',
                'short_description' => 'Automatic eye drop filling sealing machine with 2 head filling head and 1 pneumatic motor powered inner plug sealing head, achieving 40 bottles per minute for 5 ml and 10 ml filling with no-bottle no-filling and pre/post gasing support.',
                'long_description' => "The eye drop filling sealing machine are available 2 head filling head and 1 pneumatic motor powered inner plug sealing head. The achievable speed is 40 Bottle per minute for 5 ml and 10 ml filling. The unique features of the machine are \"No Bottle - No Filling system\", \"Post and Pre Gasing system\" and the motor powered pneumatic head in order to carry out the plugging operation.\n\n**Salient Feature**\nAutomatic Eye Drop Filling And Sealing Machine is equipped with the following outstanding features:\n- Pretty compact and versatile equipment for 2 in 1 operation\n- Unique for small volumes filling for eye, ear and nasal drops\n- Maintenance less operation\n- Choice of peristaltic pump as well as volumetric syringe assisted filling ensures accuracy of +1%\n- Pneumatic inner plug pressing\n- All contact parts made of SS 316\n- No Bottle - No Filling System\n- No Bottle - No Pneumatic Plug System\n- cGMP model\n\n**Technical Specification**\n- Output/Hour: 40 Bottle Per Minute (Up To 10 Ml)\n- Direction Of Movement: Left To Right\n- Number Of Head (Filling): 1 - 2 Head\n- Number Of Head (Inner Plug): 1 - 2 Head\n- Filling Range: 2 Ml. To 10 Ml.\n- Electric Specification / Vibrator: 300 Watt Magnetic Coil\n- Height Of Conveyor: 850 Mm (+ 50 Mm Height Adjustable)\n- Machine Dimensions: 1430 Mm (L) X 950 Mm (W) X 1310 Mm (H) Approx.",
                'features' => [
                    '2 head filling head and 1 pneumatic motor powered inner plug sealing head',
                    'Achievable speed of 40 bottles per minute for 5 ml and 10 ml filling',
                    'No Bottle - No Filling system',
                    'Post and Pre Gasing system',
                    'Motor powered pneumatic head for plugging operation',
                    'Pretty compact and versatile equipment for 2 in 1 operation',
                    'Unique for small volumes filling for eye, ear and nasal drops',
                    'Maintenance less operation',
                    'Choice of peristaltic pump and volumetric syringe assisted filling with +1% accuracy',
                    'Pneumatic inner plug pressing',
                    'All contact parts made of SS 316',
                    'No Bottle - No Pneumatic Plug System',
                    'cGMP model',
                ],
                'applications' => ['Eye drops', 'Ear drops', 'Nasal drops', 'Small volume liquid containers'],
                'specs' => [
                    'Output/Hour' => '40 Bottle Per Minute (Up To 10 Ml)',
                    'Direction Of Movement' => 'Left To Right',
                    'Number Of Head (Filling)' => '1 - 2 Head',
                    'Number Of Head (Inner Plug)' => '1 - 2 Head',
                    'Filling Range' => '2 Ml. To 10 Ml.',
                    'Electric Specification / Vibrator' => '300 Watt Magnetic Coil',
                    'Height Of Conveyor' => '850 Mm (+ 50 Mm Height Adjustable)',
                    'Machine Dimensions' => '1430 Mm (L) X 950 Mm (W) X 1310 Mm (H) Approx.',
                ],
                'sort_order' => 7,
                'meta_title' => 'Automatic Eye Drop Filling Sealing Machine Manufacturer | Kailash Machine Tools',
                'meta_description' => 'Automatic eye drop filling sealing machine with 2 head filling, pneumatic inner plug sealing, 40 bottles per minute output, and cGMP design.',
            ],

            // POWDER FILLING
            [
                'category' => 'injectable-powder-filling',
                'name' => 'Dry Injection Powder Filling Machine',
                'slug' => 'dry-injection-powder-filling-machine',
                'model_code' => 'SGPVFR-120-240',
                'short_description' => 'Compact cGMP dry injection powder filling machine model SGPVFR-120-240 with 30–240 vials/min filling speed, ±1% fill accuracy under controlled humidity, vacuum powder suction, and built-in rubber stoppering.',
                'long_description' => "Dry injection powder filling machine model SGPVFR-120-240 designed for sterile injectable powder filling with high volumetric accuracy and integrated rubber stoppering.\n\n**Technical Specification**\n- Model: SGPVFR-120-240\n- Filling Speed: 30 - 120 - 240 Vials/minute based on 5-10ml vial (depending upon size/types of vial & powder density)\n- Design: Left --> Right\n- Powder Fill Size: 30 mg to 1.5 grams single dose (with change parts); 1.5 grams to 6 grams double, triple and four doses; fill range depending upon vial opening and bulk density of powder\n- Fill Accuracy: Under controlled level of humidity (i.e. 28%) ±1% depending upon consistency and uniformity of bulk density of injectable powder\n- Product Conveyor: 50 mm (2\") wide Delrin conveyor\n- Powder Suction: Through Vacuum\n- Powder Delivered: Through Air/Nitrogen (customer to provide)\n- Vial Diameter: 5 mm to 45 mm max\n- Vial Height: 75 mm maximum\n\n**Salient Features**\n- Compact cGMP model\n- No Vial, No Filling system eliminates wastage of costly powder\n- Multiple dosing system\n- High volumetric filling accuracy of ±1% of uniform density injectable powder can be ensured by setting the depth of piston in the port of powder wheel\n- Built-in rubber stoppering unit saves lot of space in the sterile area and reduces the length of laminar flow\n- Individual drive for the filling and sealing to match the speed of filling and sealing\n- All motors are provided with appropriate contractors and relays for protection against any overload or jamming\n- Safety clutch system to avoid vial breakage\n- Variable frequency drive for speed control\n- All contact parts are easily removable for mandatory autoclaving/sterilization\n- Digital counter for counting production output",
                'features' => [
                    'Compact cGMP model',
                    'No Vial, No Filling system eliminates wastage of costly powder',
                    'Multiple dosing system',
                    'High volumetric filling accuracy of ±1% with piston depth adjustment in powder wheel port',
                    'Built-in rubber stoppering unit saves space in sterile area and reduces laminar flow length',
                    'Individual drive for filling and sealing to match operating speeds',
                    'Motors with contractors and relays for overload or jamming protection',
                    'Safety clutch system to avoid vial breakage',
                    'Variable frequency drive for speed control',
                    'All contact parts easily removable for autoclaving/sterilization',
                    'Digital counter for production output',
                ],
                'applications' => [
                    'Sterile antibiotics',
                    'Dry injection vials',
                    'Injectable powder under controlled humidity',
                    'High-potency APIs (with containment)',
                ],
                'specs' => [
                    'Model' => 'SGPVFR-120-240',
                    'Filling Speed' => '30 - 120 - 240 Vials/minute (5-10ml vial, depending on vial size/type & powder density)',
                    'Design' => 'Left --> Right',
                    'Powder Fill Size' => '30 mg to 1.5 g single dose; 1.5 g to 6 g double/triple/four doses (change parts)',
                    'Fill Accuracy' => '±1% under controlled humidity (~28%)',
                    'Product Conveyor' => '50 mm (2") wide Delrin conveyor',
                    'Powder Suction' => 'Through Vacuum',
                    'Powder Delivered' => 'Through Air/Nitrogen (customer to provide)',
                    'Vial Diameter' => '5 mm to 45 mm max',
                    'Vial Height' => '75 mm maximum',
                ],
                'is_featured' => true,
                'sort_order' => 1,
                'meta_title' => 'Dry Injection Powder Filling Machine SGPVFR-120-240 | Kailash Machine Tools',
                'meta_description' => 'Dry injection powder filling machine SGPVFR-120-240 with 30-240 vials/min, ±1% accuracy, vacuum suction, nitrogen delivery, and built-in rubber stoppering for sterile injectables.',
            ],
            [
                'category' => 'injectable-powder-filling',
                'name' => 'Dry Syrup Powder Filling Machine',
                'slug' => 'dry-syrup-powder-filling-machine',
                'short_description' => 'Dry syrup powder filling machine specially designed for accurate and hygienic filling of dry syrup powders into bottles, with precise filling, high production efficiency, and contamination-free operation.',
                'long_description' => "The Dry Syrup Powder Filling Machine is specially designed for accurate and hygienic filling of dry syrup powders into bottles for pharmaceutical production lines.\n\nThe machine ensures precise filling, high production efficiency, and contamination-free operation, making it ideal for pharmaceutical and healthcare industries.\n\nIt is commonly used for filling:\n- Dry syrup powder\n- Antibiotic powder\n- Nutraceutical powder\n- Herbal powder products\n- Healthcare formulations\n\n**Key Features**\n- High filling accuracy\n- Stainless steel GMP construction\n- Semi automatic / fully automatic models available\n- User-friendly control panel\n- Compact and robust design\n- Low maintenance operation\n- Fast and efficient filling system\n- Adjustable filling volume\n- Smooth powder flow mechanism\n- Suitable for different bottle sizes\n\n**Technical Specifications**\n- Machine Type: Dry Syrup Powder Filling Machine\n- Application: Powder Filling\n- Filling Range: 5 gm - 100 gm\n- Filling Accuracy: +/-1%\n- Production Capacity: 20 - 80 Bottles/min\n- Material: SS 304 / SS 316 Stainless Steel\n- Operation: Semi / Fully Automatic\n- Power Supply: 220V / 415V\n- Frequency: 50 Hz",
                'features' => ['High filling accuracy', 'Stainless steel GMP construction', 'Semi automatic / fully automatic models available', 'User-friendly control panel', 'Compact and robust design', 'Low maintenance operation', 'Fast and efficient filling system', 'Adjustable filling volume', 'Smooth powder flow mechanism', 'Suitable for different bottle sizes'],
                'applications' => ['Dry syrup powder', 'Antibiotic powder', 'Nutraceutical powder', 'Herbal powder products', 'Healthcare formulations'],
                'specs' => ['Machine Type' => 'Dry Syrup Powder Filling Machine', 'Application' => 'Powder Filling', 'Filling Range' => '5 gm - 100 gm', 'Filling Accuracy' => '+/-1%', 'Production Capacity' => '20 - 80 Bottles/min', 'Material' => 'SS 304 / SS 316 Stainless Steel', 'Operation' => 'Semi / Fully Automatic', 'Power Supply' => '220V / 415V', 'Frequency' => '50 Hz'],
                'sort_order' => 2,
                'meta_title' => 'Dry Syrup Powder Filling Machine Manufacturer | Kailash Machine Tools',
                'meta_description' => 'Dry syrup powder filling machine for accurate and hygienic bottle filling with 5 gm - 100 gm range, 20 - 80 bottles/min output, and SS 304 / SS 316 GMP construction.',
            ],

            [
                'category' => 'injectable-powder-filling',
                'name' => 'Automatic Servo Auger-Type Powder Filling Machine',
                'slug' => 'automatic-auger-powder-filling-machine',
                'model_code' => 'KMTPF-2 Head (60 BPM)',
                'short_description' => 'Automatic servo auger-type powder filling machine for bottles — 5 g to 1 kg fill range with change parts, no-bottle no-fill system, VFD speed control, cGMP model.',
                'features' => ['No bottle – no fill system prevents powder wastage', 'Total compact cGMP model', 'All powder contact parts SS 316', 'SS 304 machine construction for sturdiness', 'Easy cleaning / autoclaving / sterilization of all moving parts', '±2–3% accuracy (may differ based on powder)', 'AC Variable Frequency Drive speed control', 'Turn table with separate drive for speed control', 'Low air – automatic machine stop system', 'Supreme quality imported gear motor for conveyor', 'Used for 30–120 ml bottle diameter without change parts', 'Optional: powder level sensor, safety guard, servo PLC control, acrylic cabinet'],
                'applications' => ['Oral powder bottles', 'Nutraceutical powders', 'Dry fills', 'Pharmaceutical bottle powder filling'],
                'specs' => ['Model' => 'KMTPF-2 Head (60 BPM)', 'Output' => '1500–2400/hr', 'Fill size' => '5 g to 1 kg (with change parts)', 'Electric power' => '1.5 HP, 415V, 50Hz', 'Conveyor power' => '0.25 HP, 415V, 50Hz', 'Machine dimensions' => '2000mm (L) x 1100mm (W) x 1700mm (H)', 'Case dimensions' => '2200mm (L) x 1300mm (W) x 1900mm (H)'],
                'sort_order' => 3,
                'meta_title' => 'Automatic Servo Auger Powder Filling Machine Manufacturer | 60 BPM',
                'meta_description' => 'Automatic servo auger-type powder filling machine — 5 g to 1 kg fill range, no-bottle no-fill, VFD speed control, cGMP. Manufacturer Ahmedabad India.',
            ],
            [
                'category' => 'injectable-powder-filling',
                'name' => 'SEMI TYPE SINGLE HEAD AUGER TYPE POWDER FILLING MACHINE',
                'slug' => 'semi-type-single-head-machine',
                'model_code' => null,
                'short_description' => 'Semi type single head auger type powder filling machine for precise powder filling in containers and bags, with semi-automatic operation, 1% accuracy, and 415V three phase power.',
                'long_description' => "The auger filler machine is used for powder stuffing and controlled powder filling applications. This semi type single head auger type powder filling machine is designed to deliver precise target weight filling for a range of powder products in containers and bags.\n\nAuger filler machines are suitable for handling both free-flowing and non-free-flowing powders. The auger filler is widely used where consistent and accurate powder dosing is required.\n\n**Types of Auger Filler**\n- Semi Automatic Auger Filler Machine\n- Automatic Auger Filler Machine\n\n**Available Sizes**\n- 12 inches\n- 16 inches\n- 18 inches\n- 20 inches\n- 24 inches\n\n**Product Details**\n- Number of Filling Heads: 1\n- Capacity: Up to 2 bags/min\n- Output: 8 to 12\n- Automation Grade: Semi-Automatic\n- Voltage: 415V\n- Phase: Three Phase\n- Power: 2 KW\n- Accuracy: 1%\n- Suitable Material: Powders\n- Weighing Range: 5Kg-25Kg & 10Kg-100Kg\n- Weighing System: Gross Weighing",
                'features' => [
                    'Single head auger type powder filling system',
                    'Semi-automatic operation',
                    'Precise body weight size powder filling',
                    'Suitable for free-flowing and non-free-flowing powders',
                    '1% filling accuracy',
                    'Gross weighing system',
                    'Available in 12 inch, 16 inch, 18 inch, 20 inch and 24 inch sizes',
                ],
                'applications' => [
                    'Powder filling in containers',
                    'Powder filling in bags',
                    'Free-flowing powders',
                    'Non-free-flowing powders',
                ],
                'specs' => [
                    'Machine Type' => 'Semi Type Single Head Auger Type Powder Filling Machine',
                    'Number of Filling Heads' => '1',
                    'Capacity' => 'Up to 2 bags/min',
                    'Output' => '8 to 12',
                    'Automation Grade' => 'Semi-Automatic',
                    'Voltage' => '415V',
                    'Phase' => 'Three Phase',
                    'Power' => '2 KW',
                    'Accuracy' => '1%',
                    'Suitable Material' => 'Powders',
                    'Weighing Range' => '5Kg-25Kg & 10Kg-100Kg',
                    'Weighing System' => 'Gross Weighing',
                    'Available Sizes' => '12 inches, 16 inches, 18 inches, 20 inches, 24 inches',
                ],
                'sort_order' => 4,
            ],

            // CAPPING
            [
                'category' => 'capping-sealing',
                'name' => 'Automatic Multi Head Bottle ROPP & Screw Cap Sealing Machine',
                'slug' => 'ropp-cap-sealing-machine',
                'model_code' => 'GRCS-100/150/200',
                'short_description' => 'Automatic multi-head ROPP and screw cap sealing machine with SS matte finish body, torque adjustable heads, self-lubricating UHMW-PE guide profiles, and no-container no-cap arrangement.',
                'features' => ['No container no cap arrangement', 'Single motor synchronizes conveyor, star wheel & platform turret', 'Adjustable height of conveyor belt', 'SS matte finish body', 'All contact parts stainless steel', 'Self-lubricating UHMW-PE guide profile for low friction', 'SS cladding or hard chrome plating for long life & corrosion resistance', 'Smooth noiseless conveying & vibration free operation', 'Torque adjustable', 'Low noise level, low power consumption', 'Optional: motorized height adjustment, acrylic cabinet, safety guard'],
                'applications' => ['Glass/PET bottles with ROPP aluminium caps', 'Screw cap bottles', 'Oral liquid bottles'],
                'specs' => ['Models' => 'GRCS-100 / GRCS-150 / GRCS-200', 'Output' => '2400–12000/hr', 'Direction' => 'Left to Right', 'Number of heads' => '4/6/8', 'Electrical motor' => '0.25–2 HP, 415V, 50Hz', 'Conveyor height' => '860–910 mm'],
                'is_featured' => true,
                'sort_order' => 1,
            ],
            [
                'category' => 'capping-sealing',
                'name' => 'Automatic Multi Head Vials Cap Sealing Machine',
                'slug' => 'automatic-multi-head-vials-cap-machine',
                'model_code' => 'KMTVS-1/4/8/12',
                'short_description' => 'Automatic multi-head vial cap sealing machine with safety clutch, adjustable sealing pressure, single motor synchronizing conveyor, star wheel and platform turret for 13–20 mm caps.',
                'features' => ['No container no cap arrangement', 'Single motor synchronizes conveyor, star wheel & platform turret', 'Adjustable height of conveyor belt', 'Sealing pressure variable for different gauge and cap sizes', 'Specially designed hopper for increased bowl storage capacity', 'Low noise level, low power consumption', 'Star wheel with safety clutch for auto stoppage on jamming'],
                'applications' => ['Injectable vials with flip-off seals', 'Vial cap sealing (13mm to 20mm)'],
                'specs' => ['Model' => 'KMTVS-1/4/8/12', 'Speed' => '30–220 vials/min (based on 2–100 ml vial)', 'Cap seal capacity' => '13mm to 20mm', 'Vial dia' => '17mm to 45mm', 'Design' => 'Left → Right', 'Machine dimension' => '2135mm (L) x 925mm (W) x 2350mm (H)', 'Product conveyor' => '50mm (2") wide Delrin conveyor'],
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
                'name' => 'Automatic Rotary High Speed Ampoule/Vials Sticker Labelling Machine',
                'slug' => 'ampoule-sticker-labelling-machine',
                'model_code' => 'KMT-ASL-120/240/300',
                'short_description' => 'PLC/Microprocessor controlled rotary high-speed sticker labelling machine for ampoules and round objects, up to 300 containers/min with stepper or servo drive.',
                'features' => ['PLC/Microprocessor controlled label dispensing', 'User-friendly sensing interface for label and product', 'Choice of stepper or servo drive', 'Suitable for overlap labelling', '"No container – no label" sensor', 'PLC-based operation with VFD speed control', 'Digital counter for total labeled containers', 'Real-time speed indicator', 'Label roll end – machine stop system', 'No change parts during size changeover', 'cGMP compliant'],
                'applications' => ['Round ampoules', 'Vials', 'High-speed labelling lines'],
                'specs' => ['Production rate' => '50–300 containers/min', 'Dispensing speed' => '5 m/min', 'Power' => '0.5 HP, 220V, 1 Phase, 50Hz', 'Container dia' => '16 mm to 80 mm', 'Label length' => '20 mm to unlimited', 'Label width' => '10 mm to 90 mm'],
                'sort_order' => 2,
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
                'name' => 'Powder Mixing Ball Mill Machine',
                'slug' => 'lab-ball-mill',
                'short_description' => 'Powder mixing ball mill machine with 3 adjustable rollers for reducing hard materials to powder, available in 2–8 roller models with stainless steel, zirconia, agate and corundum media.',
                'features' => ['3 adjustable rollers', 'Available in 2/3/6/8 roller configurations', 'Wide range of mill media: stainless steel, zirconia, agate, corundum', 'Digital timer (99h 59min)', 'Variable speed (0–480 rpm)'],
                'applications' => ['Powder mixing and size reduction', 'API and excipient processing', 'Lab-scale formulation'],
                'specs' => ['Model' => '2–8 Roller', 'Type' => 'Powder Mixing, 2/3/6/8 rollers', 'Speed range' => '0–480 rpm', 'Pot diameter' => '65–85 mm', 'Roller diameter' => 'Ø 5 cm', 'Roller length' => '38 cm', 'Timer' => '99h 59min', 'Motor' => '60W', 'Power supply' => '415V 3 Phase'],
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
                'short_description' => 'Stainless-steel slat conveyor for smooth transportation of bottles, vials, containers, cartons, and packaged products between pharmaceutical production and packaging machines with SS304 / SS316 GMP construction.',
                'long_description' => "A Stainless-Steel Slat Conveyor is a durable and hygienic conveying system used in pharmaceutical industries for smooth transportation of bottles, vials, containers, cartons, and packaged products between different production and packaging machines. It is specially designed for continuous operation in GMP-compliant environments.\n\n**Applications**\n- Bottle conveying in filling lines\n- Vial and container transfer\n- Labeling and capping machine connection\n- Inspection and packaging lines\n- Pharmaceutical production automation\n- Material handling in cleanroom areas\n\n**Key Features**\n- SS304 / SS316 stainless steel construction\n- GMP-compliant hygienic design\n- Smooth and continuous product movement\n- Adjustable conveyor speed with VFD\n- Low maintenance and noise-free operation\n- Strong and corrosion-resistant structure\n- Modular and customizable design\n- Easy cleaning and sanitization\n\n**Advantages**\n- Improves production efficiency\n- Reduces manual handling\n- Ensures smooth product flow\n- Suitable for high-speed pharma lines\n- Long-lasting and reliable performance\n\n**Typical Technical Specifications**\n- Material: SS304 / SS316\n- Conveyor Type: Slat Chain Conveyor\n- Speed Control: Variable Frequency Drive (VFD)\n- Application: Pharma, Food, Cosmetic, Chemical\n- Operation: Automatic\n- Chain Material: Stainless Steel / Plastic Slats\n- Conveyor Length: Customizable",
                'features' => [
                    'SS304 / SS316 stainless steel construction',
                    'GMP-compliant hygienic design',
                    'Smooth and continuous product movement',
                    'Adjustable conveyor speed with VFD',
                    'Low maintenance and noise-free operation',
                    'Strong and corrosion-resistant structure',
                    'Modular and customizable design',
                    'Easy cleaning and sanitization',
                ],
                'applications' => [
                    'Bottle conveying in filling lines',
                    'Vial and container transfer',
                    'Labeling and capping machine connection',
                    'Inspection and packaging lines',
                    'Pharmaceutical production automation',
                    'Material handling in cleanroom areas',
                ],
                'specs' => [
                    'Material' => 'SS304 / SS316',
                    'Conveyor Type' => 'Slat Chain Conveyor',
                    'Speed Control' => 'Variable Frequency Drive (VFD)',
                    'Application' => 'Pharma, Food, Cosmetic, Chemical',
                    'Operation' => 'Automatic',
                    'Chain Material' => 'Stainless Steel / Plastic Slats',
                    'Conveyor Length' => 'Customizable',
                ],
                'sort_order' => 1,
                'meta_title' => 'Stainless-Steel Slat Conveyor Manufacturer | Pharma Packing Conveyors',
                'meta_description' => 'SS304 / SS316 stainless-steel slat conveyor for pharmaceutical lines with VFD speed control, GMP hygienic design, and smooth bottle/vial/container transfer.',
            ],
            [
                'category' => 'packing-conveyors',
                'name' => 'Stainless-Steel Roller Conveyor',
                'slug' => 'ss-roller-conveyor',
                'short_description' => 'Stainless-steel roller conveyor for smooth material handling of cartons, bottles, drums, trays, and containers in pharmaceutical packaging lines with SS304 / SS316 GMP construction.',
                'long_description' => "A Stainless-Steel Roller Conveyor is widely used in pharmaceutical manufacturing and packaging lines for smooth material handling and transportation of cartons, bottles, drums, trays, and containers between different processing machines. These conveyors are designed according to GMP standards to maintain hygiene, durability, and operational efficiency.\n\n**Applications**\n- Pharmaceutical packaging lines\n- Carton and bottle movement\n- Material transfer between machines\n- Inspection and sorting areas\n- Secondary packaging sections\n- Warehouse and dispatch handling\n\n**Key Features**\n- SS304 / SS316 stainless steel construction\n- Corrosion-resistant and hygienic design\n- Smooth roller movement with low noise\n- Heavy-duty load carrying capacity\n- Adjustable height and length options\n- Easy cleaning and maintenance\n- Suitable for cleanroom environments\n- Modular and customizable structure\n\n**Advantages**\n- Improves material flow efficiency\n- Reduces manual handling\n- Minimizes product damage\n- Long operational life\n- Easy integration with pharma machinery\n\n**Typical Technical Specifications**\n- Material: SS304 / SS316\n- Roller Type: Free Roll / Powered Rollers\n- Conveyor Length: Customizable\n- Roller Diameter: 38 mm - 89 mm\n- Load Capacity: As per requirement\n- Application: Pharma, Food, Cosmetic, Chemical\n- Operation: Manual / Motorized",
                'features' => [
                    'SS304 / SS316 stainless steel construction',
                    'Corrosion-resistant and hygienic design',
                    'Smooth roller movement with low noise',
                    'Heavy-duty load carrying capacity',
                    'Adjustable height and length options',
                    'Easy cleaning and maintenance',
                    'Suitable for cleanroom environments',
                    'Modular and customizable structure',
                ],
                'applications' => [
                    'Pharmaceutical packaging lines',
                    'Carton and bottle movement',
                    'Material transfer between machines',
                    'Inspection and sorting areas',
                    'Secondary packaging sections',
                    'Warehouse and dispatch handling',
                ],
                'specs' => [
                    'Material' => 'SS304 / SS316',
                    'Roller Type' => 'Free Roll / Powered Rollers',
                    'Conveyor Length' => 'Customizable',
                    'Roller Diameter' => '38 mm – 89 mm',
                    'Load Capacity' => 'As per requirement',
                    'Application' => 'Pharma, Food, Cosmetic, Chemical',
                    'Operation' => 'Manual / Motorized',
                ],
                'sort_order' => 3,
                'meta_title' => 'Stainless-Steel Roller Conveyor Manufacturer | Pharma Packing Conveyors',
                'meta_description' => 'SS304 / SS316 stainless-steel roller conveyor for pharmaceutical packaging lines with smooth roller movement, customizable length, and GMP-compliant hygienic design.',
            ],
            [
                'category' => 'packing-conveyors',
                'name' => 'Rotary Turn Table',
                'slug' => 'rotary-turn-table',
                'short_description' => 'Rotary turn table for smooth movement, collection, feeding, and buffering of bottles, vials, jars, or containers between pharmaceutical packaging machines with SS304 / SS316 GMP construction.',
                'long_description' => "A Rotary Turn Table is a supporting machine used in pharmaceutical packaging and production lines for smooth movement, collection, feeding, and buffering of bottles, vials, jars, or containers between machines. It helps maintain continuous product flow and reduces manual handling.\n\n**Common Applications in Pharma Industry**\n- Bottle feeding before filling or labeling machines\n- Collection of filled bottles after capping/sealing\n- Buffering products during machine stoppage\n- Product transfer in L shape or U shape conveyor lines\n- Accumulation and unscrambling of vials/bottles\n\n**Key Features**\n- SS304 / SS316 stainless steel GMP construction\n- Adjustable speed with VFD control\n- Smooth and noiseless operation\n- Compact and space-saving design\n- Compatible with round, square, and irregular bottles\n- Height adjustable structure\n- Easy integration with conveyor systems\n- Hygienic and easy-to-clean surface\n\n**Advantages**\n- Improves production efficiency\n- Reduces bottle jams and product damage\n- Maintains continuous line synchronization\n- Minimizes manual labor\n- Suitable for high-speed pharmaceutical lines\n\n**Typical Technical Specifications**\n- Material: SS304 / SS316\n- Diameter: 600 mm - 1500 mm\n- Speed Control: Variable Frequency Drive (VFD)\n- Application: Pharma, Food, Cosmetic, Chemical\n- Operation: Automatic / Semi-Automatic\n- Bottle Type: Round, Square, Oval",
                'features' => [
                    'SS304 / SS316 stainless steel GMP construction',
                    'Adjustable speed with VFD control',
                    'Smooth and noiseless operation',
                    'Compact and space-saving design',
                    'Compatible with round, square, and irregular bottles',
                    'Height adjustable structure',
                    'Easy integration with conveyor systems',
                    'Hygienic and easy-to-clean surface',
                ],
                'applications' => [
                    'Bottle feeding before filling or labeling machines',
                    'Collection of filled bottles after capping/sealing',
                    'Buffering products during machine stoppage',
                    'Product transfer in L shape or U shape conveyor lines',
                    'Accumulation and unscrambling of vials/bottles',
                ],
                'specs' => [
                    'Material' => 'SS304 / SS316',
                    'Diameter' => '600 mm – 1500 mm',
                    'Speed Control' => 'Variable Frequency Drive (VFD)',
                    'Application' => 'Pharma, Food, Cosmetic, Chemical',
                    'Operation' => 'Automatic / Semi-Automatic',
                    'Bottle Type' => 'Round, Square, Oval',
                ],
                'sort_order' => 2,
                'meta_title' => 'Rotary Turn Table Manufacturer | Pharma Packaging Conveyors',
                'meta_description' => 'Rotary turn table for pharmaceutical packaging lines with SS304 / SS316 construction, VFD speed control, 600–1500 mm diameter, and smooth bottle/vial feeding and buffering.',
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
                'short_description' => 'Garment storage cabinet for pharmaceutical and cleanroom environments to safely store cleanroom garments, uniforms, aprons, gloves, masks, caps, and other protective clothing with GMP-compliant stainless steel construction.',
                'long_description' => "A Garment Storage Cabinet is specially designed for pharmaceutical and cleanroom environments to safely store cleanroom garments, uniforms, aprons, gloves, masks, caps, and other protective clothing. These cabinets are manufactured using GMP-compliant stainless steel construction to maintain hygiene, cleanliness, and contamination control in pharma production areas.

**Applications**
- Pharmaceutical cleanrooms
- GMP production areas
- Research laboratories
- Healthcare and biotech facilities
- Sterile garment storage rooms
- Cleanroom changing areas

**Key Features**
- SS304 / SS316 stainless steel construction
- GMP-compliant hygienic design
- Corrosion-resistant and durable body
- Multiple storage compartments
- Ventilated shelves for airflow
- Lockable doors for safety
- Easy cleaning and maintenance
- Smooth finish with rounded edges

**Advantages**
- Maintains garment hygiene and cleanliness
- Prevents contamination in cleanroom areas
- Organized storage solution
- Long-lasting and rust-resistant
- Suitable for sterile environments

**Typical Technical Specifications**
- Material: SS304 / SS316
- Finish: Matt / Mirror Finish
- Storage Type: Shelves / Hanging Compartments
- Door Type: Hinged / Sliding
- Application: Pharma, Cleanroom, Laboratory
- Operation: Manual",
                'features' => [
                    'SS304 / SS316 stainless steel construction',
                    'GMP-compliant hygienic design',
                    'Corrosion-resistant and durable body',
                    'Multiple storage compartments',
                    'Ventilated shelves for airflow',
                    'Lockable doors for safety',
                    'Easy cleaning and maintenance',
                    'Smooth finish with rounded edges',
                ],
                'applications' => [
                    'Pharmaceutical cleanrooms',
                    'GMP production areas',
                    'Research laboratories',
                    'Healthcare and biotech facilities',
                    'Sterile garment storage rooms',
                    'Cleanroom changing areas',
                ],
                'specs' => [
                    'Material' => 'SS304 / SS316',
                    'Finish' => 'Matt / Mirror Finish',
                    'Storage Type' => 'Shelves / Hanging Compartments',
                    'Door Type' => 'Hinged / Sliding',
                    'Application' => 'Pharma, Cleanroom, Laboratory',
                    'Operation' => 'Manual',
                ],
                'sort_order' => 2,
                'meta_title' => 'Garment Storage Cabinet Manufacturer | GMP Pharma Furniture',
                'meta_description' => 'GMP-compliant SS304 / SS316 garment storage cabinet for pharma cleanrooms with ventilated shelves, lockable doors, and hygienic contamination-control design.',
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
                'name' => 'Semi Automatic Tube Filling Machine',
                'slug' => 'tube-filling-sealing-machine',
                'model_code' => null,
                'short_description' => 'Semi automatic tube filling machine with accurate filling system, pneumatic sealing, adjustable filling volume, and compact GMP stainless steel construction for pharma and cosmetic applications.',
                'long_description' => "Semi automatic tube filling machine designed for pharma and cosmetic tube filling and sealing operations.\n\n**Key Features**\n- Stainless Steel body (GMP model)\n- Accurate tube filling system\n- Semi automatic operation\n- Easy tube loading and sealing\n- Low maintenance\n- Compact industrial design\n- Adjustable filling volume\n- Pneumatic sealing system\n- User-friendly control panel\n\n**Technical Specifications**\n- Machine Type: Semi Automatic\n- Application: Pharma / Cosmetic\n- Filling Range: 5g – 250g\n- Output Capacity: 15 – 30 tubes/min\n- Material: SS 304 Stainless Steel\n- Tube Type: Aluminium / Laminated\n- Power Supply: 220V / 50Hz\n- Operation: Pneumatic + Electrical\n- Filling Accuracy: ±1%",
                'features' => [
                    'Stainless Steel body (GMP model)',
                    'Accurate tube filling system',
                    'Semi automatic operation',
                    'Easy tube loading and sealing',
                    'Low maintenance',
                    'Compact industrial design',
                    'Adjustable filling volume',
                    'Pneumatic sealing system',
                    'User-friendly control panel',
                ],
                'applications' => ['Pharma', 'Cosmetic', 'Aluminium tubes', 'Laminated tubes'],
                'specs' => [
                    'Machine Type' => 'Semi Automatic',
                    'Application' => 'Pharma / Cosmetic',
                    'Filling Range' => '5g – 250g',
                    'Output Capacity' => '15 – 30 tubes/min',
                    'Material' => 'SS 304 Stainless Steel',
                    'Tube Type' => 'Aluminium / Laminated',
                    'Power Supply' => '220V / 50Hz',
                    'Operation' => 'Pneumatic + Electrical',
                    'Filling Accuracy' => '±1%',
                ],
                'sort_order' => 2,
                'meta_title' => 'Semi Automatic Tube Filling Machine Manufacturer | Kailash Machine Tools',
                'meta_description' => 'Semi automatic tube filling machine for pharma and cosmetic applications with 5g–250g filling range, pneumatic sealing, and ±1% filling accuracy.',
            ],
            [
                'category' => 'other-machinery',
                'name' => 'Wire Mesh Piston',
                'slug' => 'wire-mesh-piston',
                'model_code' => null,
                'short_description' => 'Wire Mesh Piston is a precision-engineered component used in pharmaceutical and liquid filling machines for smooth product flow, accurate dosing, and filtration during the filling process.',
                'long_description' => "The Wire Mesh Piston is a precision-engineered component used in pharmaceutical and liquid filling machines. It is specially designed for smooth product flow, accurate dosing, and filtration during the filling process.\n\nThis component is commonly used in:\n- Pharmaceutical filling machines\n- Liquid filling systems\n- Syrup manufacturing units\n- Cosmetic filling machines\n- Chemical processing equipment\n\n**Key Features**\n- High-quality Stainless Steel construction\n- Corrosion-resistant and durable\n- Precision-machined design\n- Smooth and accurate product flow\n- Easy installation and maintenance\n- Hygienic GMP-standard finish\n- Suitable for continuous industrial operation\n\n**Technical Specifications**\n- Product Type: Wire Mesh Piston\n- Material: SS 304 / SS 316 Stainless Steel\n- Application: Pharma Filling Machines\n- Surface Finish: Mirror / Polished Finish\n- Usage: Dosing & Product Flow Control\n- Corrosion Resistance: Yes\n- Industry: Pharmaceutical / Cosmetic / Chemical\n- Maintenance: Low Maintenance",
                'features' => [
                    'High-quality Stainless Steel construction',
                    'Corrosion-resistant and durable',
                    'Precision-machined design',
                    'Smooth and accurate product flow',
                    'Easy installation and maintenance',
                    'Hygienic GMP-standard finish',
                    'Suitable for continuous industrial operation',
                ],
                'applications' => [
                    'Pharmaceutical filling machines',
                    'Liquid filling systems',
                    'Syrup manufacturing units',
                    'Cosmetic filling machines',
                    'Chemical processing equipment',
                ],
                'specs' => [
                    'Product Type' => 'Wire Mesh Piston',
                    'Material' => 'SS 304 / SS 316 Stainless Steel',
                    'Application' => 'Pharma Filling Machines',
                    'Surface Finish' => 'Mirror / Polished Finish',
                    'Usage' => 'Dosing & Product Flow Control',
                    'Corrosion Resistance' => 'Yes',
                    'Industry' => 'Pharmaceutical / Cosmetic / Chemical',
                    'Maintenance' => 'Low Maintenance',
                ],
                'sort_order' => 3,
                'meta_title' => 'Wire Mesh Piston Manufacturer | Kailash Machine Tools',
                'meta_description' => 'Precision-engineered wire mesh piston for pharmaceutical and liquid filling machines with SS 304 / SS 316 construction and smooth dosing control.',
            ],
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

        Product::query()->where('slug', '=', 'automatic-multi-head-vial-cap-sealing-machine')->delete();
        Product::query()->where('slug', '=', 'vial-flip-off-sealing-machine')->delete();
        Product::query()->where('slug', '=', 'automatic-servo-pfs-washing-machine')->delete();
        Product::query()->where('slug', '=', 'automatic-eye-drop-filling-capping-sealing-machine')->delete();
        Product::query()->where('slug', '=', 'online-vial-cap-inspection-machine')->delete();
        Product::query()->where('slug', '=', 'semi-automatic-auger-powder-filling-machine')->delete();
        Product::query()->where('slug', '=', 'wet-glue-labelling-machine')->delete();

        foreach ($products as $p) {
            $category = Category::query()->where('slug', '=', $p['category'])->firstOrFail();
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

        return "Kailash Machine Tools manufactures and exports the {$name} — {$short} Built in our Ahmedabad (Gujarat, India) facility with SS 316L pharmaceutical-grade construction, PLC-HMI controls, and full cGMP compliance. Every machine ships with FAT certification, installation &amp; on-site commissioning, and IQ/OQ validation support.{$featText}{$appText}\n\n**Compliance &amp; Documentation**\n- cGMP compliant build\n- AISI 316L contact parts\n- Full documentation: design qualification, FAT protocol, IQ/OQ\n- CE-ready variants available for export\n\n**Why Kailash Machine Tools**\nSince 1989, we have delivered injectable &amp; packaging line machinery to pharmaceutical manufacturers across India, the Middle East, Southeast Asia and Africa. Formerly operating as Shree Ganesh Pharmatech, we combine three decades of precision engineering with modern servo-automation to give you equipment that runs reliably for decades. Request a quotation for this {$name} today.";
    }
}
