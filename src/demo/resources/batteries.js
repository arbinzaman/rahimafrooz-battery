// Demo seed data & mock API routes for batteries, categories, and vehicle search.

import { db, registerSeed } from "../db";
import { registerRoutes, respond } from "../mockServer";
import { batteryImage } from "../images";

const CATEGORIES_SEED = [
  { category_id: 1, category_name: "Passenger Car" },
  { category_id: 2, category_name: "Commercial Vehicle" },
  { category_id: 3, category_name: "Three Wheeler" },
  { category_id: 4, category_name: "Motorcycle" },
  { category_id: 5, category_name: "Generator" },
  { category_id: 6, category_name: "Special Purpose" },
  { category_id: 7, category_name: "IPS" },
  { category_id: 8, category_name: "Solar" },
  { category_id: 9, category_name: "Tractor" },
  { category_id: 10, category_name: "Golf Cart" },
  { category_id: 11, category_name: "Forklift" },
  { category_id: 12, category_name: "Electric Vehicle" },
];

const mkImgs = (shortCode, brand, color) => [
  batteryImage(shortCode, { brand, color }),
  batteryImage(`${shortCode} PRO`, { brand, color: "#1F2A44" }),
  batteryImage(`${shortCode} SPEC`, { brand, color: "#0369A1" }),
];

const BATTERIES_SEED = [
  // --- Passenger Car (Hybrid & Non-Hybrid) ---
  {
    id: 1,
    battery_name: "Globatt Hybrid S46B24R AGM",
    short_code: "GB-S46B24R",
    material_code: "MAT-GB-4624",
    new_jis: "S46B24R",
    brand_code: "GLOBATT",
    series: "Globatt Hybrid AGM",
    item_code: "GB-HYB-045",
    model: "S46B24R",
    voltage: 12,
    capacity: 45,
    cold_cranking_ability_cca: 370,
    plate: 11,
    product_dimensions_lxbxh_mm: "238 x 129 x 227",
    dry_weight: 9.8,
    wet_weight: 13.2,
    total_warranty: 24,
    price: 11500,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("GB-S46B24R", "GLOBATT", "#E31E24"),
    applicable_categories: ["Passenger Car"],
    technology: "Hybrid",
    supported_vehicle_makes: ["Toyota", "Honda", "Nissan"],
    supported_vehicle_models: [
      { make: "Toyota", models: ["Prius", "Aqua", "Corolla Axio Hybrid", "CH-R"] },
      { make: "Honda", models: ["Vezel", "Grace", "Fit Hybrid"] },
      { make: "Nissan", models: ["X-Trail Hybrid", "Note e-Power"] },
    ],
    make_years: [
      { model: "Prius", years: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"] },
      { model: "Aqua", years: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "Corolla Axio Hybrid", years: ["2018", "2019", "2020", "2021", "2022"] },
      { model: "CH-R", years: ["2019", "2020", "2021", "2022", "2023"] },
      { model: "Vezel", years: ["2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "Grace", years: ["2017", "2018", "2019", "2020"] },
      { model: "Fit Hybrid", years: ["2018", "2019", "2020", "2021"] },
      { model: "X-Trail Hybrid", years: ["2018", "2019", "2020", "2021", "2022"] },
      { model: "Note e-Power", years: ["2019", "2020", "2021", "2022"] },
    ],
  },
  {
    id: 2,
    battery_name: "Globatt EFB Q-85 Start-Stop",
    short_code: "GB-Q85EFB",
    material_code: "MAT-GB-8501",
    new_jis: "Q-85 / 95D23L",
    brand_code: "GLOBATT",
    series: "Globatt EFB",
    item_code: "GB-EFB-065",
    model: "Q-85",
    voltage: 12,
    capacity: 65,
    cold_cranking_ability_cca: 580,
    plate: 13,
    product_dimensions_lxbxh_mm: "232 x 173 x 225",
    dry_weight: 13.4,
    wet_weight: 17.5,
    total_warranty: 24,
    price: 14200,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("GB-Q85EFB", "GLOBATT", "#0E7490"),
    applicable_categories: ["Passenger Car"],
    technology: "Hybrid",
    supported_vehicle_makes: ["Toyota", "Honda", "Mitsubishi"],
    supported_vehicle_models: [
      { make: "Toyota", models: ["Prius", "Harrier Hybrid", "Camry Hybrid", "Noah Hybrid"] },
      { make: "Honda", models: ["Vezel", "CR-V Hybrid"] },
      { make: "Mitsubishi", models: ["Outlander PHEV"] },
    ],
    make_years: [
      { model: "Prius", years: ["2019", "2020", "2021", "2022", "2023", "2024"] },
      { model: "Harrier Hybrid", years: ["2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "Camry Hybrid", years: ["2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "Noah Hybrid", years: ["2018", "2019", "2020", "2021", "2022"] },
      { model: "Vezel", years: ["2019", "2020", "2021", "2022", "2023"] },
      { model: "CR-V Hybrid", years: ["2020", "2021", "2022", "2023", "2024"] },
      { model: "Outlander PHEV", years: ["2019", "2020", "2021", "2022", "2023"] },
    ],
  },
  {
    id: 3,
    battery_name: "Globatt SMF NS60L (55B24L)",
    short_code: "GB-NS60L",
    material_code: "MAT-GB-6002",
    new_jis: "55B24L",
    brand_code: "GLOBATT",
    series: "Globatt SMF",
    item_code: "GB-SMF-045",
    model: "NS60L",
    voltage: 12,
    capacity: 45,
    cold_cranking_ability_cca: 430,
    plate: 11,
    product_dimensions_lxbxh_mm: "238 x 129 x 227",
    dry_weight: 9.2,
    wet_weight: 12.6,
    total_warranty: 18,
    price: 8250,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("GB-NS60L", "GLOBATT", "#E31E24"),
    applicable_categories: ["Passenger Car"],
    technology: "Non-Hybrid",
    supported_vehicle_makes: ["Toyota", "Honda", "Suzuki"],
    supported_vehicle_models: [
      { make: "Toyota", models: ["Corolla", "Allion", "Premio", "Axio"] },
      { make: "Honda", models: ["Civic", "City"] },
      { make: "Suzuki", models: ["Swift", "Ciaz"] },
    ],
    make_years: [
      { model: "Corolla", years: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "Allion", years: ["2016", "2017", "2018", "2019", "2020", "2021"] },
      { model: "Premio", years: ["2016", "2017", "2018", "2019", "2020", "2021"] },
      { model: "Axio", years: ["2016", "2017", "2018", "2019", "2020"] },
      { model: "Civic", years: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "City", years: ["2018", "2019", "2020", "2021", "2022"] },
      { model: "Swift", years: ["2017", "2018", "2019", "2020", "2021", "2022"] },
      { model: "Ciaz", years: ["2018", "2019", "2020", "2021"] },
    ],
  },
  {
    id: 4,
    battery_name: "Globatt SMF N70Z Heavy Duty",
    short_code: "GB-N70Z",
    material_code: "MAT-GB-7004",
    new_jis: "95D31R",
    brand_code: "GLOBATT",
    series: "Globatt Gold",
    item_code: "GB-GLD-075",
    model: "N70Z",
    voltage: 12,
    capacity: 75,
    cold_cranking_ability_cca: 650,
    plate: 15,
    product_dimensions_lxbxh_mm: "306 x 173 x 225",
    dry_weight: 14.8,
    wet_weight: 19.6,
    total_warranty: 24,
    price: 12900,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("GB-N70Z", "GLOBATT", "#1F2A44"),
    applicable_categories: ["Passenger Car", "Commercial Vehicle"],
    technology: "Non-Hybrid",
    supported_vehicle_makes: ["Toyota", "Mitsubishi", "Nissan", "Isuzu"],
    supported_vehicle_models: [
      { make: "Toyota", models: ["Corolla", "Land Cruiser Prado", "Hilux", "HiAce"] },
      { make: "Mitsubishi", models: ["Pajero Sport", "L200"] },
      { make: "Nissan", models: ["X-Trail", "Navara"] },
      { make: "Isuzu", models: ["D-Max", "NKR"] },
    ],
    make_years: [
      { model: "Corolla", years: ["2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "Land Cruiser Prado", years: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"] },
      { model: "Hilux", years: ["2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "HiAce", years: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "Pajero Sport", years: ["2018", "2019", "2020", "2021", "2022"] },
      { model: "L200", years: ["2018", "2019", "2020", "2021"] },
      { model: "X-Trail", years: ["2017", "2018", "2019", "2020", "2021"] },
      { model: "Navara", years: ["2019", "2020", "2021", "2022"] },
      { model: "D-Max", years: ["2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "NKR", years: ["2018", "2019", "2020", "2021", "2022"] },
    ],
  },
  {
    id: 5,
    battery_name: "Volta Prime DIN66 European MF",
    short_code: "GB-DIN66",
    material_code: "MAT-VL-6601",
    new_jis: "56638 / DIN66",
    brand_code: "VOLTA",
    series: "Volta Prime",
    item_code: "VL-DIN-066",
    model: "DIN66",
    voltage: 12,
    capacity: 66,
    cold_cranking_ability_cca: 600,
    plate: 13,
    product_dimensions_lxbxh_mm: "278 x 175 x 190",
    dry_weight: 12.7,
    wet_weight: 16.8,
    total_warranty: 24,
    price: 13600,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("GB-DIN66", "VOLTA", "#15803D"),
    applicable_categories: ["Passenger Car"],
    technology: "Non-Hybrid",
    supported_vehicle_makes: ["Toyota", "Honda", "BMW", "Mercedes-Benz"],
    supported_vehicle_models: [
      { make: "Toyota", models: ["Corolla", "Allion", "Premio"] },
      { make: "Honda", models: ["Civic", "Accord"] },
      { make: "BMW", models: ["3 Series", "X1"] },
      { make: "Mercedes-Benz", models: ["C-Class", "E-Class"] },
    ],
    make_years: [
      { model: "Corolla", years: ["2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "Allion", years: ["2017", "2018", "2019", "2020", "2021"] },
      { model: "Premio", years: ["2017", "2018", "2019", "2020", "2021"] },
      { model: "Civic", years: ["2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "Accord", years: ["2018", "2019", "2020", "2021", "2022"] },
      { model: "3 Series", years: ["2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "X1", years: ["2019", "2020", "2021", "2022", "2023"] },
      { model: "C-Class", years: ["2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "E-Class", years: ["2018", "2019", "2020", "2021", "2022"] },
    ],
  },
  {
    id: 6,
    battery_name: "Lucas Supreme 55D23L",
    short_code: "LC-55D23L",
    material_code: "MAT-LC-5523",
    new_jis: "75D23L",
    brand_code: "LUCAS",
    series: "Lucas Supreme",
    item_code: "LC-SUP-060",
    model: "55D23L",
    voltage: 12,
    capacity: 60,
    cold_cranking_ability_cca: 520,
    plate: 13,
    product_dimensions_lxbxh_mm: "232 x 173 x 225",
    dry_weight: 11.9,
    wet_weight: 15.8,
    total_warranty: 18,
    price: 10400,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("LC-55D23L", "LUCAS", "#B45309"),
    applicable_categories: ["Passenger Car"],
    technology: "Non-Hybrid",
    supported_vehicle_makes: ["Toyota", "Mitsubishi", "Nissan"],
    supported_vehicle_models: [
      { make: "Toyota", models: ["Corolla", "RAV4", "Camry"] },
      { make: "Mitsubishi", models: ["Lancer", "ASX"] },
      { make: "Nissan", models: ["X-Trail", "Sunny"] },
    ],
    make_years: [
      { model: "Corolla", years: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"] },
      { model: "RAV4", years: ["2018", "2019", "2020", "2021", "2022"] },
      { model: "Camry", years: ["2017", "2018", "2019", "2020", "2021"] },
      { model: "Lancer", years: ["2016", "2017", "2018", "2019"] },
      { model: "ASX", years: ["2018", "2019", "2020", "2021"] },
      { model: "X-Trail", years: ["2017", "2018", "2019", "2020", "2021"] },
      { model: "Sunny", years: ["2017", "2018", "2019", "2020"] },
    ],
  },
  // --- Commercial Vehicle ---
  {
    id: 7,
    battery_name: "Globatt Commercial N100 HD",
    short_code: "GB-N100HD",
    material_code: "MAT-GB-1001",
    new_jis: "95E41R",
    brand_code: "GLOBATT",
    series: "Globatt Commercial",
    item_code: "GB-COM-100",
    model: "N100",
    voltage: 12,
    capacity: 100,
    cold_cranking_ability_cca: 780,
    plate: 17,
    product_dimensions_lxbxh_mm: "408 x 173 x 233",
    dry_weight: 19.5,
    wet_weight: 26.4,
    total_warranty: 18,
    price: 16800,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("GB-N100HD", "GLOBATT", "#E31E24"),
    applicable_categories: ["Commercial Vehicle", "Generator"],
    technology: "Non-Hybrid",
    supported_vehicle_makes: ["Tata", "Mitsubishi", "Isuzu", "Toyota"],
    supported_vehicle_models: [
      { make: "Tata", models: ["LPT 1109", "Ace Mega", "407"] },
      { make: "Mitsubishi", models: ["Canter"] },
      { make: "Isuzu", models: ["NKR", "NPR"] },
      { make: "Toyota", models: ["HiAce", "Dyna"] },
    ],
    make_years: [
      { model: "LPT 1109", years: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"] },
      { model: "Ace Mega", years: ["2018", "2019", "2020", "2021", "2022"] },
      { model: "407", years: ["2018", "2019", "2020", "2021", "2022"] },
      { model: "Canter", years: ["2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "NKR", years: ["2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "NPR", years: ["2019", "2020", "2021", "2022", "2023"] },
      { model: "HiAce", years: ["2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "Dyna", years: ["2018", "2019", "2020", "2021", "2022"] },
    ],
  },
  {
    id: 8,
    battery_name: "Volta Heavy Duty N150 Truck",
    short_code: "VL-N150HD",
    material_code: "MAT-VL-1502",
    new_jis: "145G51",
    brand_code: "VOLTA",
    series: "Volta Heavy",
    item_code: "VL-HVY-150",
    model: "N150",
    voltage: 12,
    capacity: 150,
    cold_cranking_ability_cca: 950,
    plate: 23,
    product_dimensions_lxbxh_mm: "508 x 222 x 257",
    dry_weight: 28.4,
    wet_weight: 39.2,
    total_warranty: 18,
    price: 22900,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("VL-N150HD", "VOLTA", "#15803D"),
    applicable_categories: ["Commercial Vehicle", "Generator"],
    technology: "Non-Hybrid",
    supported_vehicle_makes: ["Hino", "Ashok Leyland", "Tata"],
    supported_vehicle_models: [
      { make: "Hino", models: ["AK1J", "RM2"] },
      { make: "Ashok Leyland", models: ["Ecomet 1615", "Viking"] },
      { make: "Tata", models: ["LPT 1615", "Prima"] },
    ],
    make_years: [
      { model: "AK1J", years: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"] },
      { model: "RM2", years: ["2019", "2020", "2021", "2022", "2023"] },
      { model: "Ecomet 1615", years: ["2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "Viking", years: ["2018", "2019", "2020", "2021", "2022"] },
      { model: "LPT 1615", years: ["2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "Prima", years: ["2019", "2020", "2021", "2022", "2023"] },
    ],
  },
  {
    id: 9,
    battery_name: "Lucas Commercial N200 Super",
    short_code: "LC-N200SP",
    material_code: "MAT-LC-2001",
    new_jis: "190H52",
    brand_code: "LUCAS",
    series: "Lucas Fleet",
    item_code: "LC-FLT-200",
    model: "N200",
    voltage: 12,
    capacity: 200,
    cold_cranking_ability_cca: 1150,
    plate: 29,
    product_dimensions_lxbxh_mm: "521 x 278 x 270",
    dry_weight: 37.2,
    wet_weight: 51.5,
    total_warranty: 18,
    price: 29500,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("LC-N200SP", "LUCAS", "#B45309"),
    applicable_categories: ["Commercial Vehicle", "Generator", "Special Purpose"],
    technology: "Non-Hybrid",
    supported_vehicle_makes: ["Hino", "Ashok Leyland", "Scania"],
    supported_vehicle_models: [
      { make: "Hino", models: ["AK1J", "500 Series"] },
      { make: "Ashok Leyland", models: ["Captain", "Viking"] },
      { make: "Scania", models: ["K410 Coach"] },
    ],
    make_years: [
      { model: "AK1J", years: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"] },
      { model: "500 Series", years: ["2019", "2020", "2021", "2022", "2023"] },
      { model: "Captain", years: ["2019", "2020", "2021", "2022"] },
      { model: "Viking", years: ["2018", "2019", "2020", "2021", "2022"] },
      { model: "K410 Coach", years: ["2020", "2021", "2022", "2023", "2024"] },
    ],
  },
  {
    id: 10,
    battery_name: "Globatt Commercial EFB Hybrid H120",
    short_code: "GB-H120EFB",
    material_code: "MAT-GB-1208",
    new_jis: "130F51",
    brand_code: "GLOBATT",
    series: "Globatt Commercial EFB",
    item_code: "GB-CEFB-120",
    model: "H120",
    voltage: 12,
    capacity: 120,
    cold_cranking_ability_cca: 860,
    plate: 21,
    product_dimensions_lxbxh_mm: "505 x 182 x 257",
    dry_weight: 24.1,
    wet_weight: 33.4,
    total_warranty: 24,
    price: 21400,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("GB-H120EFB", "GLOBATT", "#0E7490"),
    applicable_categories: ["Commercial Vehicle"],
    technology: "Hybrid",
    supported_vehicle_makes: ["Hino", "Toyota"],
    supported_vehicle_models: [
      { make: "Hino", models: ["Dutro Hybrid"] },
      { make: "Toyota", models: ["Coaster Hybrid"] },
    ],
    make_years: [
      { model: "Dutro Hybrid", years: ["2020", "2021", "2022", "2023", "2024"] },
      { model: "Coaster Hybrid", years: ["2020", "2021", "2022", "2023", "2024"] },
    ],
  },
  // --- Three Wheeler ---
  {
    id: 11,
    battery_name: "Rahimafrooz EZ-Drive 130Ah Three-Wheeler",
    short_code: "RA-EZ130",
    material_code: "MAT-RA-1301",
    new_jis: "3W-130T",
    brand_code: "RAHIMAFROOZ",
    series: "EZ-Drive",
    item_code: "RA-3W-130",
    model: "EZ130",
    voltage: 12,
    capacity: 130,
    cold_cranking_ability_cca: 540,
    plate: 19,
    product_dimensions_lxbxh_mm: "410 x 175 x 250",
    dry_weight: 23.2,
    wet_weight: 31.8,
    total_warranty: 12,
    price: 17500,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("RA-EZ130", "RAHIMAFROOZ", "#E31E24"),
    applicable_categories: ["Three Wheeler", "Electric Vehicle"],
    technology: "",
    supported_vehicle_makes: [],
    supported_vehicle_models: [],
    make_years: [],
  },
  {
    id: 12,
    battery_name: "Volta Auto-CNG 40Ah NS40Z",
    short_code: "VL-CNG40",
    material_code: "MAT-VL-4012",
    new_jis: "40B19R",
    brand_code: "VOLTA",
    series: "Volta CNG",
    item_code: "VL-3W-040",
    model: "NS40Z",
    voltage: 12,
    capacity: 40,
    cold_cranking_ability_cca: 350,
    plate: 9,
    product_dimensions_lxbxh_mm: "197 x 129 x 227",
    dry_weight: 7.4,
    wet_weight: 10.4,
    total_warranty: 15,
    price: 6850,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("VL-CNG40", "VOLTA", "#15803D"),
    applicable_categories: ["Three Wheeler"],
    technology: "",
    supported_vehicle_makes: [],
    supported_vehicle_models: [],
    make_years: [],
  },
  // --- Motorcycle ---
  {
    id: 13,
    battery_name: "Globatt Moto YTX5L-BS VRLA",
    short_code: "GB-YTX5L",
    material_code: "MAT-GB-0501",
    new_jis: "YTX5L-BS",
    brand_code: "GLOBATT",
    series: "Globatt Moto",
    item_code: "GB-MC-005",
    model: "YTX5L",
    voltage: 12,
    capacity: 5,
    cold_cranking_ability_cca: 85,
    plate: 5,
    product_dimensions_lxbxh_mm: "113 x 70 x 105",
    dry_weight: 1.5,
    wet_weight: 1.95,
    total_warranty: 12,
    price: 1650,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("GB-YTX5L", "GLOBATT", "#E31E24"),
    applicable_categories: ["Motorcycle"],
    technology: "",
    supported_vehicle_makes: [],
    supported_vehicle_models: [],
    make_years: [],
  },
  {
    id: 14,
    battery_name: "Globatt Moto YTX9-BS High Cranking",
    short_code: "GB-YTX9",
    material_code: "MAT-GB-0901",
    new_jis: "YTX9-BS",
    brand_code: "GLOBATT",
    series: "Globatt Moto",
    item_code: "GB-MC-009",
    model: "YTX9",
    voltage: 12,
    capacity: 9,
    cold_cranking_ability_cca: 135,
    plate: 7,
    product_dimensions_lxbxh_mm: "150 x 87 x 105",
    dry_weight: 2.4,
    wet_weight: 3.1,
    total_warranty: 12,
    price: 2650,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("GB-YTX9", "GLOBATT", "#7C3AED"),
    applicable_categories: ["Motorcycle"],
    technology: "",
    supported_vehicle_makes: [],
    supported_vehicle_models: [],
    make_years: [],
  },
  {
    id: 15,
    battery_name: "Lucas Moto 12N7-4A MF",
    short_code: "LC-12N7",
    material_code: "MAT-LC-0704",
    new_jis: "12N7-4A",
    brand_code: "LUCAS",
    series: "Lucas Moto",
    item_code: "LC-MC-007",
    model: "12N7",
    voltage: 12,
    capacity: 7,
    cold_cranking_ability_cca: 105,
    plate: 7,
    product_dimensions_lxbxh_mm: "135 x 75 x 133",
    dry_weight: 2.0,
    wet_weight: 2.65,
    total_warranty: 12,
    price: 2150,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("LC-12N7", "LUCAS", "#B45309"),
    applicable_categories: ["Motorcycle"],
    technology: "",
    supported_vehicle_makes: [],
    supported_vehicle_models: [],
    make_years: [],
  },
  // --- IPS ---
  {
    id: 16,
    battery_name: "Rahimafrooz RT-150 Tall Tubular IPS",
    short_code: "VL-IPS150",
    material_code: "MAT-RA-150T",
    new_jis: "RT-150",
    brand_code: "RAHIMAFROOZ",
    series: "Tall Tubular",
    item_code: "RA-IPS-150",
    model: "RT150",
    voltage: 12,
    capacity: 150,
    cold_cranking_ability_cca: 650,
    plate: 15,
    product_dimensions_lxbxh_mm: "505 x 190 x 410",
    dry_weight: 34.5,
    wet_weight: 54.0,
    total_warranty: 30,
    price: 24500,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("VL-IPS150", "RAHIMAFROOZ", "#0369A1"),
    applicable_categories: ["IPS"],
    technology: "",
    supported_vehicle_makes: [],
    supported_vehicle_models: [],
    make_years: [],
  },
  {
    id: 17,
    battery_name: "Rahimafrooz RT-200 Tall Tubular IPS",
    short_code: "RA-RT200",
    material_code: "MAT-RA-200T",
    new_jis: "RT-200",
    brand_code: "RAHIMAFROOZ",
    series: "Tall Tubular",
    item_code: "RA-IPS-200",
    model: "RT200",
    voltage: 12,
    capacity: 200,
    cold_cranking_ability_cca: 820,
    plate: 19,
    product_dimensions_lxbxh_mm: "505 x 190 x 410",
    dry_weight: 41.0,
    wet_weight: 63.5,
    total_warranty: 30,
    price: 29800,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("RA-RT200", "RAHIMAFROOZ", "#1F2A44"),
    applicable_categories: ["IPS"],
    technology: "",
    supported_vehicle_makes: [],
    supported_vehicle_models: [],
    make_years: [],
  },
  {
    id: 18,
    battery_name: "Volta Flat Plate IPS 120Ah",
    short_code: "VL-FP120",
    material_code: "MAT-VL-120F",
    new_jis: "V-IPS120",
    brand_code: "VOLTA",
    series: "Volta Home Backup",
    item_code: "VL-IPS-120",
    model: "FP120",
    voltage: 12,
    capacity: 120,
    cold_cranking_ability_cca: 520,
    plate: 15,
    product_dimensions_lxbxh_mm: "498 x 186 x 258",
    dry_weight: 24.0,
    wet_weight: 35.5,
    total_warranty: 24,
    price: 18900,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("VL-FP120", "VOLTA", "#15803D"),
    applicable_categories: ["IPS"],
    technology: "",
    supported_vehicle_makes: [],
    supported_vehicle_models: [],
    make_years: [],
  },
  // --- Solar ---
  {
    id: 19,
    battery_name: "Rahimafrooz Solar Deep Cycle 130Ah",
    short_code: "RA-SOL130",
    material_code: "MAT-RA-130S",
    new_jis: "RS-130DC",
    brand_code: "RAHIMAFROOZ",
    series: "Solar Deep Cycle",
    item_code: "RA-SOL-130",
    model: "SOL130",
    voltage: 12,
    capacity: 130,
    cold_cranking_ability_cca: 510,
    plate: 15,
    product_dimensions_lxbxh_mm: "505 x 190 x 365",
    dry_weight: 31.2,
    wet_weight: 46.8,
    total_warranty: 60,
    price: 23200,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("RA-SOL130", "RAHIMAFROOZ", "#0E7490"),
    applicable_categories: ["Solar"],
    technology: "",
    supported_vehicle_makes: [],
    supported_vehicle_models: [],
    make_years: [],
  },
  {
    id: 20,
    battery_name: "Delta OPzV Tubular Gel Solar 200Ah",
    short_code: "DL-OPZV200",
    material_code: "MAT-DL-200G",
    new_jis: "OPzV-200",
    brand_code: "DELTA",
    series: "Delta Solar Gel",
    item_code: "DL-SOL-200",
    model: "OPzV200",
    voltage: 12,
    capacity: 200,
    cold_cranking_ability_cca: 760,
    plate: 19,
    product_dimensions_lxbxh_mm: "522 x 240 x 244",
    dry_weight: 48.0,
    wet_weight: 62.5,
    total_warranty: 60,
    price: 38500,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("DL-OPZV200", "DELTA", "#0369A1"),
    applicable_categories: ["Solar", "Special Purpose"],
    technology: "",
    supported_vehicle_makes: [],
    supported_vehicle_models: [],
    make_years: [],
  },
  // --- Tractor, Golf Cart, Forklift, Electric Vehicle, Generator, Special Purpose ---
  {
    id: 21,
    battery_name: "Lucas Agri-Power 88Ah Tractor Battery",
    short_code: "LC-TR88",
    material_code: "MAT-LC-8801",
    new_jis: "95D31L-T",
    brand_code: "LUCAS",
    series: "Lucas Agri",
    item_code: "LC-TR-088",
    model: "TR88",
    voltage: 12,
    capacity: 88,
    cold_cranking_ability_cca: 720,
    plate: 15,
    product_dimensions_lxbxh_mm: "306 x 173 x 225",
    dry_weight: 16.4,
    wet_weight: 22.1,
    total_warranty: 18,
    price: 14900,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("LC-TR88", "LUCAS", "#B45309"),
    applicable_categories: ["Tractor"],
    technology: "",
    supported_vehicle_makes: [],
    supported_vehicle_models: [],
    make_years: [],
  },
  {
    id: 22,
    battery_name: "Rahimafrooz Golf-Pro 6V 225Ah Deep Cycle",
    short_code: "RA-GC225",
    material_code: "MAT-RA-225G",
    new_jis: "GC2-225",
    brand_code: "RAHIMAFROOZ",
    series: "Golf-Pro",
    item_code: "RA-GC-225",
    model: "GC225",
    voltage: 6,
    capacity: 225,
    cold_cranking_ability_cca: 680,
    plate: 17,
    product_dimensions_lxbxh_mm: "260 x 180 x 276",
    dry_weight: 22.8,
    wet_weight: 29.4,
    total_warranty: 18,
    price: 19400,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("RA-GC225", "RAHIMAFROOZ", "#15803D"),
    applicable_categories: ["Golf Cart", "Electric Vehicle"],
    technology: "",
    supported_vehicle_makes: [],
    supported_vehicle_models: [],
    make_years: [],
  },
  {
    id: 23,
    battery_name: "Delta Traction 48V 500Ah Forklift Pack",
    short_code: "DL-FK500",
    material_code: "MAT-DL-500F",
    new_jis: "4PzS-500",
    brand_code: "DELTA",
    series: "Delta Traction",
    item_code: "DL-FK-500",
    model: "FK500",
    voltage: 48,
    capacity: 500,
    cold_cranking_ability_cca: 1400,
    plate: 25,
    product_dimensions_lxbxh_mm: "830 x 520 x 627",
    dry_weight: 540.0,
    wet_weight: 710.0,
    total_warranty: 36,
    price: 385000,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("DL-FK500", "DELTA", "#1F2A44"),
    applicable_categories: ["Forklift", "Special Purpose"],
    technology: "",
    supported_vehicle_makes: [],
    supported_vehicle_models: [],
    make_years: [],
  },
  {
    id: 24,
    battery_name: "Globatt EV-X 150Ah Deep Cycle EV",
    short_code: "GB-EV150",
    material_code: "MAT-GB-150E",
    new_jis: "EV-150DC",
    brand_code: "GLOBATT",
    series: "Globatt EV",
    item_code: "GB-EV-150",
    model: "EV150",
    voltage: 12,
    capacity: 150,
    cold_cranking_ability_cca: 610,
    plate: 19,
    product_dimensions_lxbxh_mm: "485 x 172 x 240",
    dry_weight: 29.8,
    wet_weight: 41.2,
    total_warranty: 18,
    price: 21500,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("GB-EV150", "GLOBATT", "#0E7490"),
    applicable_categories: ["Electric Vehicle", "Three Wheeler"],
    technology: "",
    supported_vehicle_makes: [],
    supported_vehicle_models: [],
    make_years: [],
  },
  {
    id: 25,
    battery_name: "Delta Telecom VRLA 12V 100Ah Front Terminal",
    short_code: "DL-FT100",
    material_code: "MAT-DL-100T",
    new_jis: "FT12-100",
    brand_code: "DELTA",
    series: "Delta Telecom",
    item_code: "DL-SP-100",
    model: "FT100",
    voltage: 12,
    capacity: 100,
    cold_cranking_ability_cca: 640,
    plate: 15,
    product_dimensions_lxbxh_mm: "394 x 110 x 285",
    dry_weight: 26.5,
    wet_weight: 31.0,
    total_warranty: 36,
    price: 27800,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Bangladesh",
    imgurls: mkImgs("DL-FT100", "DELTA", "#7C3AED"),
    applicable_categories: ["Special Purpose", "Generator"],
    technology: "",
    supported_vehicle_makes: [],
    supported_vehicle_models: [],
    make_years: [],
  },
  // --- International Products (country_of_origin !== "Bangladesh") ---
  {
    id: 26,
    battery_name: "Ignus X-Pro AGM LN3 (70Ah)",
    short_code: "IG-LN3AGM",
    material_code: "MAT-IG-7003",
    new_jis: "LN3 / H6 AGM",
    brand_code: "IGNUS",
    series: "Ignus Euro AGM",
    item_code: "IG-AGM-070",
    model: "LN3",
    voltage: 12,
    capacity: 70,
    cold_cranking_ability_cca: 760,
    plate: 15,
    product_dimensions_lxbxh_mm: "278 x 175 x 190",
    dry_weight: 16.8,
    wet_weight: 20.5,
    total_warranty: 30,
    price: 24500,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Germany",
    imgurls: mkImgs("IG-LN3AGM", "IGNUS", "#BE185D"),
    applicable_categories: ["Passenger Car"],
    technology: "Hybrid",
    supported_vehicle_makes: ["Toyota", "BMW", "Mercedes-Benz"],
    supported_vehicle_models: [
      { make: "Toyota", models: ["Prius", "Harrier Hybrid"] },
      { make: "BMW", models: ["3 Series", "5 Series"] },
      { make: "Mercedes-Benz", models: ["C-Class", "GLC"] },
    ],
    make_years: [
      { model: "Prius", years: ["2020", "2021", "2022", "2023", "2024"] },
      { model: "Harrier Hybrid", years: ["2020", "2021", "2022", "2023"] },
      { model: "3 Series", years: ["2019", "2020", "2021", "2022", "2023", "2024"] },
      { model: "5 Series", years: ["2019", "2020", "2021", "2022", "2023"] },
      { model: "C-Class", years: ["2019", "2020", "2021", "2022", "2023"] },
      { model: "GLC", years: ["2020", "2021", "2022", "2023", "2024"] },
    ],
  },
  {
    id: 27,
    battery_name: "Ignus Ultra MF 80D26L",
    short_code: "IG-80D26L",
    material_code: "MAT-IG-8026",
    new_jis: "80D26L",
    brand_code: "IGNUS",
    series: "Ignus Ultra",
    item_code: "IG-MF-070",
    model: "80D26L",
    voltage: 12,
    capacity: 70,
    cold_cranking_ability_cca: 620,
    plate: 13,
    product_dimensions_lxbxh_mm: "260 x 173 x 225",
    dry_weight: 13.6,
    wet_weight: 17.9,
    total_warranty: 24,
    price: 15800,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "South Korea",
    imgurls: mkImgs("IG-80D26L", "IGNUS", "#BE185D"),
    applicable_categories: ["Passenger Car"],
    technology: "Non-Hybrid",
    supported_vehicle_makes: ["Toyota", "Hyundai", "Kia"],
    supported_vehicle_models: [
      { make: "Toyota", models: ["Corolla", "RAV4", "Camry"] },
      { make: "Hyundai", models: ["Tucson", "Santa Fe"] },
      { make: "Kia", models: ["Sportage", "Sorento"] },
    ],
    make_years: [
      { model: "Corolla", years: ["2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "RAV4", years: ["2019", "2020", "2021", "2022", "2023"] },
      { model: "Camry", years: ["2018", "2019", "2020", "2021", "2022"] },
      { model: "Tucson", years: ["2018", "2019", "2020", "2021", "2022", "2023"] },
      { model: "Santa Fe", years: ["2019", "2020", "2021", "2022", "2023"] },
      { model: "Sportage", years: ["2019", "2020", "2021", "2022", "2023"] },
      { model: "Sorento", years: ["2019", "2020", "2021", "2022"] },
    ],
  },
  {
    id: 28,
    battery_name: "Globatt Export DIN100 Calcium+",
    short_code: "GB-DIN100EX",
    material_code: "MAT-GB-100E",
    new_jis: "60038 / DIN100",
    brand_code: "GLOBATT EXPORT",
    series: "Globatt Export",
    item_code: "GB-EXP-100",
    model: "DIN100",
    voltage: 12,
    capacity: 100,
    cold_cranking_ability_cca: 850,
    plate: 17,
    product_dimensions_lxbxh_mm: "353 x 175 x 190",
    dry_weight: 18.9,
    wet_weight: 24.4,
    total_warranty: 24,
    price: 21800,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Japan",
    imgurls: mkImgs("GB-DIN100EX", "GLOBATT", "#E31E24"),
    applicable_categories: ["Passenger Car", "Commercial Vehicle"],
    technology: "Non-Hybrid",
    supported_vehicle_makes: ["Toyota", "Mercedes-Benz", "Land Rover"],
    supported_vehicle_models: [
      { make: "Toyota", models: ["Land Cruiser Prado", "Hilux"] },
      { make: "Mercedes-Benz", models: ["Sprinter", "E-Class"] },
      { make: "Land Rover", models: ["Defender", "Discovery"] },
    ],
    make_years: [
      { model: "Land Cruiser Prado", years: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"] },
      { model: "Hilux", years: ["2019", "2020", "2021", "2022", "2023"] },
      { model: "Sprinter", years: ["2019", "2020", "2021", "2022", "2023"] },
      { model: "E-Class", years: ["2019", "2020", "2021", "2022", "2023"] },
      { model: "Defender", years: ["2020", "2021", "2022", "2023", "2024"] },
      { model: "Discovery", years: ["2019", "2020", "2021", "2022", "2023"] },
    ],
  },
  {
    id: 29,
    battery_name: "Globatt Export N120 Marine & Fleet",
    short_code: "GB-N120EX",
    material_code: "MAT-GB-120X",
    new_jis: "115F51",
    brand_code: "GLOBATT EXPORT",
    series: "Globatt Export",
    item_code: "GB-EXP-120",
    model: "N120",
    voltage: 12,
    capacity: 120,
    cold_cranking_ability_cca: 880,
    plate: 19,
    product_dimensions_lxbxh_mm: "505 x 182 x 257",
    dry_weight: 22.8,
    wet_weight: 31.6,
    total_warranty: 24,
    price: 23500,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "Thailand",
    imgurls: mkImgs("GB-N120EX", "GLOBATT", "#0369A1"),
    applicable_categories: ["Commercial Vehicle", "Generator", "Tractor"],
    technology: "Non-Hybrid",
    supported_vehicle_makes: ["Hino", "Isuzu"],
    supported_vehicle_models: [
      { make: "Hino", models: ["AK1J", "500 Series"] },
      { make: "Isuzu", models: ["NPR", "FVR"] },
    ],
    make_years: [
      { model: "AK1J", years: ["2019", "2020", "2021", "2022", "2023"] },
      { model: "500 Series", years: ["2019", "2020", "2021", "2022", "2023"] },
      { model: "NPR", years: ["2019", "2020", "2021", "2022", "2023"] },
      { model: "FVR", years: ["2020", "2021", "2022", "2023"] },
    ],
  },
  {
    id: 30,
    battery_name: "Delta Global LiFePO4 12V 100Ah Solar",
    short_code: "DL-LFP100",
    material_code: "MAT-DL-100L",
    new_jis: "LFP12-100",
    brand_code: "DELTA GLOBAL",
    series: "Delta Lithium",
    item_code: "DL-LFP-100",
    model: "LFP100",
    voltage: 12,
    capacity: 100,
    cold_cranking_ability_cca: 700,
    plate: 16,
    product_dimensions_lxbxh_mm: "330 x 172 x 216",
    dry_weight: 11.5,
    wet_weight: 11.5,
    total_warranty: 60,
    price: 49500,
    e_store_link: "https://estore.rahimafrooz.com/",
    brochure_link: "https://www.rahimafrooz.com/",
    country_of_origin: "South Korea",
    imgurls: mkImgs("DL-LFP100", "DELTA", "#7C3AED"),
    applicable_categories: ["Solar", "Golf Cart", "Special Purpose"],
    technology: "",
    supported_vehicle_makes: [],
    supported_vehicle_models: [],
    make_years: [],
  },
];

registerSeed("categories", CATEGORIES_SEED);
registerSeed("batteries", BATTERIES_SEED);

const toNum = (v, fallback = 0) => {
  const n = Number(v);
  return Number.isFinite(n) && v !== "" && v !== null && v !== undefined ? n : fallback;
};

const norm = (s = "") => String(s).trim().toLowerCase();

function categoryNameForId(catParam) {
  const cat = db.all("categories").find(
    (c) => String(c.category_id) === String(catParam) || norm(c.category_name) === norm(catParam)
  );
  return cat ? cat.category_name : String(catParam);
}

function batteriesInCategory(catParam) {
  const catName = norm(categoryNameForId(catParam));
  return db.all("batteries").filter((b) =>
    (b.applicable_categories || []).some((c) => norm(c) === catName)
  );
}

function normalizeBatteryPayload(body, existing = {}) {
  const name = body.battery_name ?? existing.battery_name ?? "Rahimafrooz Battery";
  const shortCode = body.short_code ?? existing.short_code ?? `RA-${Date.now()}`;
  const brandCode = body.brand_code ?? existing.brand_code ?? "GLOBATT";
  const merged = {
    ...existing,
    ...body,
    battery_name: name,
    short_code: shortCode,
    brand_code: brandCode,
    voltage: toNum(body.voltage, existing.voltage ?? 12),
    capacity: toNum(body.capacity, existing.capacity ?? 60),
    cold_cranking_ability_cca: toNum(body.cold_cranking_ability_cca, existing.cold_cranking_ability_cca ?? 480),
    plate: toNum(body.plate, existing.plate ?? 11),
    dry_weight: toNum(body.dry_weight, existing.dry_weight ?? 12.0),
    wet_weight: toNum(body.wet_weight, existing.wet_weight ?? 16.0),
    total_warranty: toNum(body.total_warranty, existing.total_warranty ?? 18),
    price: toNum(body.price, existing.price ?? 9500),
    applicable_categories: Array.isArray(body.applicable_categories)
      ? body.applicable_categories
      : existing.applicable_categories || [],
    supported_vehicle_makes: Array.isArray(body.supported_vehicle_makes)
      ? body.supported_vehicle_makes
      : existing.supported_vehicle_makes || [],
    supported_vehicle_models: Array.isArray(body.supported_vehicle_models)
      ? body.supported_vehicle_models
      : existing.supported_vehicle_models || [],
    make_years: Array.isArray(body.make_years)
      ? body.make_years
      : existing.make_years || [],
    imgurls:
      Array.isArray(existing.imgurls) && existing.imgurls.length > 0
        ? existing.imgurls
        : [batteryImage(shortCode, { brand: brandCode })],
  };
  return merged;
}

function extractImageList(val) {
  const arr = Array.isArray(val) ? val : val ? [val] : [];
  return arr.filter((v) => typeof v === "string" && (v.startsWith("data:") || v.startsWith("http") || v.startsWith("/")));
}

registerRoutes([
  // --- Categories ---
  {
    method: "GET",
    path: "/categories",
    handler: () => db.all("categories"),
  },
  {
    method: "POST",
    path: "/categories",
    handler: (req) => {
      const name = String(req.body?.category_name || "").trim();
      if (!name) return respond(400, { message: "Category name is required" });
      const rec = db.insert("categories", { category_name: name }, "category_id");
      return respond(201, rec);
    },
  },
  {
    method: "GET",
    path: "/categories/name/:category_name",
    handler: (req) => batteriesInCategory(req.params.category_name),
  },
  {
    method: "GET",
    path: "/categories/:id",
    handler: (req) => batteriesInCategory(req.params.id),
  },
  {
    method: "DELETE",
    path: "/categories/:id",
    handler: (req) => {
      db.remove("categories", req.params.id, "category_id");
      return respond(200, { message: "Category deleted successfully" });
    },
  },

  // --- Batteries CRUD & Lookups ---
  {
    method: "GET",
    path: "/batteries",
    handler: () => db.all("batteries"),
  },
  {
    method: "POST",
    path: "/batteries",
    handler: (req) => {
      const code = String(req.body?.short_code || "").trim();
      if (!code) return respond(400, { message: "Short code is required" });
      if (db.find("batteries", (b) => norm(b.short_code) === norm(code))) {
        return respond(409, { message: `Battery with short code "${code}" already exists.` });
      }
      const rec = db.insert("batteries", normalizeBatteryPayload(req.body));
      return respond(201, rec);
    },
  },
  {
    method: "POST",
    path: "/batteries/upload-images",
    handler: (req) => {
      const code = req.body?.short_code;
      const imgs = extractImageList(req.body?.batteryImages);
      const target = db.find("batteries", (b) => norm(b.short_code) === norm(code));
      if (target && imgs.length > 0) {
        target.imgurls = imgs;
        db.save();
      }
      return respond(201, { message: "Images uploaded successfully", imgurls: target?.imgurls || imgs });
    },
  },
  {
    method: "PATCH",
    path: "/batteries/upload-images/:short_code",
    handler: (req) => {
      const imgs = extractImageList(req.body?.batteryImages);
      const target = db.find("batteries", (b) => norm(b.short_code) === norm(req.params.short_code));
      if (target && imgs.length > 0) {
        target.imgurls = imgs;
        db.save();
      }
      return respond(200, { message: "Images updated successfully", imgurls: target?.imgurls || imgs });
    },
  },
  {
    method: "POST",
    path: "/batteries/for-display",
    handler: (req) => {
      const codes = Array.isArray(req.body) ? req.body.map(norm) : [];
      const all = db.all("batteries");
      if (codes.length === 0) {
        return all.filter((b) => (b.applicable_categories || []).includes("Passenger Car")).slice(0, 3);
      }
      return all.filter((b) => codes.includes(norm(b.short_code)));
    },
  },
  {
    method: "POST",
    path: "/batteries/category-wise-batteries",
    handler: (req) => {
      const cats = Array.isArray(req.body) ? req.body.map(norm) : [];
      const all = db.all("batteries");
      const matched = cats.length
        ? all.filter((b) => (b.applicable_categories || []).some((c) => cats.includes(norm(c))))
        : all;
      return matched.length >= 3 ? matched : all.slice(0, 6);
    },
  },
  {
    method: "GET",
    path: "/batteries/:short_code",
    handler: (req) => {
      const key = req.params.short_code;
      const found = db.find(
        "batteries",
        (b) => norm(b.short_code) === norm(key) || String(b.id) === String(key)
      );
      if (!found) return respond(404, { message: "Battery not found" });
      return found;
    },
  },
  {
    method: "PATCH",
    path: "/batteries/:short_code",
    handler: (req) => {
      const key = req.params.short_code;
      const found = db.find(
        "batteries",
        (b) => norm(b.short_code) === norm(key) || String(b.id) === String(key)
      );
      if (!found) return respond(404, { message: "Battery not found" });
      const updated = normalizeBatteryPayload(req.body, found);
      db.update("batteries", found.id, updated);
      return respond(200, updated);
    },
  },
  {
    method: "DELETE",
    path: "/batteries/:id",
    handler: (req) => {
      const key = req.params.id;
      const removed =
        db.remove("batteries", key, "id") ||
        db.remove("batteries", key, "short_code");
      if (!removed) return respond(404, { message: "Battery not found" });
      return respond(200, { message: "Deleted successfully" });
    },
  },

  // --- Cascading Vehicle Battery Finder ---
  {
    method: "GET",
    path: "/filtered-vehicle-batteries/:category",
    handler: (req) => {
      const items = batteriesInCategory(req.params.category);
      const techs = [...new Set(items.map((b) => b.technology).filter(Boolean))];
      return techs.map((technology) => ({ technology }));
    },
  },
  {
    method: "GET",
    path: "/filtered-vehicle-batteries/:category/:technology",
    handler: (req) => {
      const items = batteriesInCategory(req.params.category).filter(
        (b) => norm(b.technology) === norm(req.params.technology)
      );
      const makes = [...new Set(items.flatMap((b) => b.supported_vehicle_makes || []))];
      return makes.map((supported_vehicle_make) => ({ supported_vehicle_make }));
    },
  },
  {
    method: "GET",
    path: "/filtered-vehicle-batteries/:category/:technology/:brand",
    handler: (req) => {
      const brand = norm(req.params.brand);
      const items = batteriesInCategory(req.params.category).filter(
        (b) => norm(b.technology) === norm(req.params.technology)
      );
      const models = new Set();
      for (const b of items) {
        for (const entry of b.supported_vehicle_models || []) {
          if (norm(entry.make) === brand) {
            (entry.models || []).forEach((m) => models.add(m));
          }
        }
      }
      return [...models].map((model) => ({ model }));
    },
  },
  {
    method: "GET",
    path: "/filtered-vehicle-batteries/:category/:technology/:brand/:model",
    handler: (req) => {
      const brand = norm(req.params.brand);
      const model = norm(req.params.model);
      const items = batteriesInCategory(req.params.category).filter(
        (b) => norm(b.technology) === norm(req.params.technology)
      );
      const years = new Set();
      for (const b of items) {
        const hasMakeModel = (b.supported_vehicle_models || []).some(
          (entry) => norm(entry.make) === brand && (entry.models || []).some((m) => norm(m) === model)
        );
        if (!hasMakeModel) continue;
        for (const y of b.make_years || []) {
          if (norm(y.model) === model) {
            (y.years || []).forEach((yr) => years.add(String(yr)));
          }
        }
      }
      return [...years].sort().reverse().map((year) => ({ year }));
    },
  },
  {
    method: "GET",
    path: "/filtered-vehicle-batteries/:category/:technology/:brand/:model/:makeYear",
    handler: (req) => {
      const brand = norm(req.params.brand);
      const model = norm(req.params.model);
      const makeYear = String(req.params.makeYear).trim();
      const items = batteriesInCategory(req.params.category).filter((b) => {
        if (norm(b.technology) !== norm(req.params.technology)) return false;
        const hasMakeModel = (b.supported_vehicle_models || []).some(
          (entry) => norm(entry.make) === brand && (entry.models || []).some((m) => norm(m) === model)
        );
        if (!hasMakeModel) return false;
        return (b.make_years || []).some(
          (y) => norm(y.model) === model && (y.years || []).map(String).includes(makeYear)
        );
      });
      return items.map((b) => ({ short_code: b.short_code }));
    },
  },
]);
