// Demo seed data & mock API routes for board members, global presence,
// manufacturing locations, storage power sections, and contact global locations.

import { db, registerSeed } from "../db";
import { registerRoutes, respond } from "../mockServer";
import { bannerImage, placeholderImage, portraitImage } from "../images";

const validImg = (v) =>
  typeof v === "string" && (v.startsWith("data:") || v.startsWith("http") || v.startsWith("/"));

// ---------------------------------------------------------------------------
// Seed data
// ---------------------------------------------------------------------------

const BOARD_MEMBERS_SEED = [
  {
    id: 1,
    name: "Late A. C. Abdur Rahim",
    designation: "Founder & Chairman",
    description:
      "A visionary entrepreneur who founded Rahimafrooz in 1954 with a mission to build world-class industrial capability in Bangladesh. Guided by principles of integrity, excellence, and customer delight, his pioneering leadership laid the foundation for what grew into South Asia's premier storage power enterprise.",
    image_url: portraitImage("A. C. Abdur Rahim"),
    facebook: "https://www.facebook.com/Rahimafrooz/",
    instagram: "https://www.instagram.com/rahimafroozbd/",
    linkedin: "https://www.linkedin.com/company/rahimafrooz/",
  },
  {
    id: 2,
    name: "Feroz Rahim",
    designation: "Group Director",
    description:
      "Stewards strategic expansion across Rahimafrooz's core storage power, automotive aftermarket, and retail businesses. Over four decades of leadership have positioned the group at the forefront of modern battery manufacturing and customer service excellence.",
    image_url: portraitImage("Feroz Rahim"),
    facebook: "https://www.facebook.com/Rahimafrooz/",
    instagram: "https://www.instagram.com/rahimafroozbd/",
    linkedin: "https://www.linkedin.com/company/rahimafrooz/",
  },
  {
    id: 3,
    name: "Afroz Rahim",
    designation: "Group Managing Director",
    description:
      "Leads corporate governance, sustainability initiatives, and international partnerships for Rahimafrooz Group, championing clean energy adoption and world-class manufacturing standards across Bangladesh.",
    image_url: portraitImage("Afroz Rahim"),
    facebook: "https://www.facebook.com/Rahimafrooz/",
    instagram: "https://www.instagram.com/rahimafroozbd/",
    linkedin: "https://www.linkedin.com/company/rahimafrooz/",
  },
  {
    id: 4,
    name: "Niaz Rahim",
    designation: "Group Director — Strategy & Exports",
    description:
      "Oversees international business growth and brand development, taking flagship lines such as GLOBATT, VOLTA, and IGNUS to over 70 global markets while fostering innovation in energy storage.",
    image_url: portraitImage("Niaz Rahim"),
    facebook: "https://www.facebook.com/Rahimafrooz/",
    instagram: "https://www.instagram.com/rahimafroozbd/",
    linkedin: "https://www.linkedin.com/company/rahimafrooz/",
  },
  {
    id: 5,
    name: "Tariqul Alam",
    designation: "Director — Manufacturing Operations",
    description:
      "Directs all battery manufacturing plants, automation upgrades, ISO quality systems, and environmental compliance programs across Ishwardi, Savar, and Gazipur facilities.",
    image_url: portraitImage("Tariqul Alam"),
    facebook: "https://www.facebook.com/Rahimafrooz/",
    instagram: "https://www.instagram.com/rahimafroozbd/",
    linkedin: "https://www.linkedin.com/company/rahimafrooz/",
  },
];

const GLOBAL_PRESENCE_SEED = [
  {
    id: 1,
    continent: "Asia & SAARC",
    countries: [
      "Bangladesh",
      "India",
      "Nepal",
      "Sri Lanka",
      "Bhutan",
      "Maldives",
      "Myanmar",
      "Thailand",
      "Malaysia",
      "Singapore",
      "Vietnam",
      "Philippines",
      "Indonesia",
      "Cambodia",
      "Japan",
      "South Korea",
    ],
  },
  {
    id: 2,
    continent: "Middle East",
    countries: [
      "United Arab Emirates",
      "Saudi Arabia",
      "Qatar",
      "Oman",
      "Kuwait",
      "Bahrain",
      "Jordan",
      "Iraq",
      "Yemen",
      "Lebanon",
    ],
  },
  {
    id: 3,
    continent: "Africa",
    countries: [
      "Kenya",
      "Tanzania",
      "Uganda",
      "Ethiopia",
      "Nigeria",
      "Ghana",
      "South Africa",
      "Egypt",
      "Morocco",
      "Senegal",
      "Zambia",
      "Mozambique",
      "Rwanda",
      "Cameroon",
    ],
  },
  {
    id: 4,
    continent: "Europe",
    countries: [
      "United Kingdom",
      "Germany",
      "Netherlands",
      "Belgium",
      "France",
      "Italy",
      "Spain",
      "Poland",
      "Greece",
      "Romania",
      "Sweden",
      "Portugal",
    ],
  },
  {
    id: 5,
    continent: "Oceania",
    countries: [
      "Australia",
      "New Zealand",
      "Fiji",
      "Papua New Guinea",
      "Samoa",
      "Vanuatu",
    ],
  },
  {
    id: 6,
    continent: "Americas",
    countries: [
      "United States",
      "Canada",
      "Chile",
      "Peru",
      "Colombia",
      "Panama",
      "Jamaica",
      "Dominican Republic",
      "Trinidad & Tobago",
      "Paraguay",
    ],
  },
];

const MANUFACTURING_LOCATIONS_SEED = [
  {
    id: 1,
    title: "Rahimafrooz Accumulators Ltd. — Plant 1 (Savar)",
    location: "Zirabo, Ashulia, Savar, Dhaka, Bangladesh",
    description:
      "Flagship automotive and commercial battery manufacturing complex featuring automated expanded-metal grid lines, computer-controlled curing chambers, and precision acid-filling systems producing over 3.5 million units annually.",
    imageurl: placeholderImage("Savar Automotive Plant", {
      subtitle: "SMF · EFB · Automotive Batteries",
      bg: "#005bab",
    }),
  },
  {
    id: 2,
    title: "Rahimafrooz Globatt Ltd. — Ishwardi EPZ Export Plant",
    location: "Ishwardi Export Processing Zone, Pabna, Bangladesh",
    description:
      "State-of-the-art 100% export-oriented facility manufacturing Maintenance Free (SMF), AGM, and DIN-standard batteries for 70+ international markets under IATF 16949 and ISO 14001 certifications.",
    imageurl: placeholderImage("Ishwardi EPZ Plant", {
      subtitle: "Global Export Manufacturing Hub",
      bg: "#0E7490",
    }),
  },
  {
    id: 3,
    title: "RSPB Industrial, Solar & Tubular Battery Complex",
    location: "Westpanishail, Kaliakoir, Gazipur, Bangladesh",
    description:
      "Dedicated high-pressure gauntlets and die-casting tubular facility producing Tall Tubular IPS, Solar Deep-Cycle, OPzV Gel, Telecom VRLA, and Forklift Traction battery packs from 100Ah to 3000Ah.",
    imageurl: placeholderImage("Gazipur Industrial Plant", {
      subtitle: "Tubular · Solar · Telecom VRLA",
      bg: "#15803D",
    }),
  },
  {
    id: 4,
    title: "Eco-Smelting & Closed-Loop Recycling Facility",
    location: "Bhaluka Industrial Belt, Mymensingh, Bangladesh",
    description:
      "ISO 14001 certified environmentally compliant lead refining and polypropylene recycling unit with rotary furnaces, baghouse particulate scrubbers, and zero-liquid-discharge wastewater treatment.",
    imageurl: placeholderImage("Eco Recycling Plant", {
      subtitle: "Closed-Loop Green Refining",
      bg: "#1F2A44",
    }),
  },
];

const FACTORY_INFO_SEED = [
  {
    id: 1,
    factory_title: "World-Class Automated SMF & EFB Manufacturing",
    description:
      "Equipped with European and Korean continuous strip-casting, expanded grid punching, and robotic COS assembly lines ensuring consistent plate density, superior cranking power, and tropical heat resilience.",
    corner_text: "Capacity: 5M+ Batteries / Year",
    image_url: placeholderImage("Automated Grid Line", { subtitle: "Calcium-Calcium & EFB Tech", bg: "#005bab" }),
  },
  {
    id: 2,
    factory_title: "In-House R&D and International Quality Testing Lab",
    description:
      "Every batch undergoes rigorous Cold Cranking Amp (CCA), vibration resistance, deep-cycle endurance, and charge-acceptance validation according to JIS, DIN, SAE, and IEC international standards.",
    corner_text: "100% Batch Tested · ISO 9001",
    image_url: placeholderImage("R&D Testing Lab", { subtitle: "JIS · DIN · IEC Certified", bg: "#0E7490" }),
  },
  {
    id: 3,
    factory_title: "Sustainable Green Manufacturing & Zero-Discharge ETP",
    description:
      "Advanced fume-extraction scrubbers, biological & chemical effluent treatment plants, and circular battery recycling protect workers, surrounding communities, and ecosystems.",
    corner_text: "ISO 14001 & 45001 Compliant",
    image_url: placeholderImage("Green Operations", { subtitle: "Zero Liquid Discharge ETP", bg: "#15803D" }),
  },
];

const MILESTONE_SEED = [
  {
    id: 1,
    image_url: bannerImage("1954 → 1992 → 2009 → 2026", "70+ Years of Storage Power Leadership in Bangladesh & 70+ Global Markets", {
      bg: "#005bab",
    }),
    description:
      "Founded in 1954, Rahimafrooz pioneered dry-charge battery manufacturing in the 1960s, launched international exports in 1992, became Bangladesh's first Maintenance-Free (SMF) battery manufacturer in 2009, and today powers millions of vehicles, homes, solar microgrids, and telecom towers across 70+ countries.",
  },
];

const OUR_VALUES_SEED = [
  { id: 1, caption: "Integrity", image_url: placeholderImage("INTEGRITY", { width: 320, height: 320, bg: "#005bab" }) },
  { id: 2, caption: "Excellence", image_url: placeholderImage("EXCELLENCE", { width: 320, height: 320, bg: "#0E7490" }) },
  { id: 3, caption: "Customer Delight", image_url: placeholderImage("DELIGHT", { width: 320, height: 320, bg: "#15803D" }) },
  { id: 4, caption: "Innovation", image_url: placeholderImage("INNOVATION", { width: 320, height: 320, bg: "#B45309" }) },
  { id: 5, caption: "Sustainability", image_url: placeholderImage("GREEN", { width: 320, height: 320, bg: "#1F2A44" }) },
];

const YOUTUBE_SEED = [
  {
    id: 1,
    video_url: "https://www.youtube.com/embed/aqz-KE-bpKQ",
  },
];

const CONTACT_LOCATIONS_SEED = [
  {
    id: 1,
    location_title: "Head Office — Bangladesh",
    location_name: "Rahimafrooz Storage Power Business",
    location: "705, West Nakhalpara, Tejgaon, Dhaka-1215, Bangladesh",
    phone_numbers: "+880 2 5815 3128, +880 2 9113696",
    email: "battery@rahimafrooz.com",
    lat: 23.769018,
    lng: 90.393878,
  },
  {
    id: 2,
    location_title: "Chattogram Regional Office",
    location_name: "RSPB Chattogram Hub",
    location: "House 42, Agrabad Commercial Area, Chattogram-4100, Bangladesh",
    phone_numbers: "+880 31 716420, +880 1713 045210",
    email: "ctg.sales@rahimafrooz.com",
    lat: 22.3269,
    lng: 91.8124,
  },
  {
    id: 3,
    location_title: "Sylhet Regional Office",
    location_name: "RSPB Sylhet Service Center",
    location: "Mendibag Point, Sylhet-3100, Bangladesh",
    phone_numbers: "+880 821 728450",
    email: "sylhet.sales@rahimafrooz.com",
    lat: 24.8949,
    lng: 91.8687,
  },
  {
    id: 4,
    location_title: "Middle East Office",
    location_name: "Globatt Middle East FZE",
    location: "Jebel Ali Free Zone (JAFZA), Dubai, United Arab Emirates",
    phone_numbers: "+971 4 881 4520",
    email: "mea.export@rahimafrooz.com",
    lat: 25.0029,
    lng: 55.0752,
  },
  {
    id: 5,
    location_title: "APAC Export Desk",
    location_name: "Rahimafrooz Asia Pacific",
    location: "10 Anson Road, International Plaza, Singapore 079903",
    phone_numbers: "+65 6225 8940",
    email: "apac.export@rahimafrooz.com",
    lat: 1.2761,
    lng: 103.8458,
  },
  {
    id: 6,
    location_title: "East Africa Regional Desk",
    location_name: "Globatt Africa Distribution",
    location: "Mombasa Road Industrial Park, Nairobi, Kenya",
    phone_numbers: "+254 20 555 0194",
    email: "africa.export@rahimafrooz.com",
    lat: -1.3192,
    lng: 36.8511,
  },
];

registerSeed("board_members", BOARD_MEMBERS_SEED);
registerSeed("global_presence", GLOBAL_PRESENCE_SEED);
registerSeed("manufacturing_locations", MANUFACTURING_LOCATIONS_SEED);
registerSeed("factory_informations", FACTORY_INFO_SEED);
registerSeed("milestone_images", MILESTONE_SEED);
registerSeed("our_values", OUR_VALUES_SEED);
registerSeed("youtube_videos", YOUTUBE_SEED);
registerSeed("contact_locations", CONTACT_LOCATIONS_SEED);

const parseCountries = (val) => {
  if (Array.isArray(val)) return val.map((s) => String(s).trim()).filter(Boolean);
  return String(val || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
};

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------

registerRoutes([
  // --- Board Members ---
  { method: "GET", path: "/board-members", handler: () => db.all("board_members") },
  {
    method: "POST",
    path: "/board-members",
    handler: (req) => {
      const name = req.body?.name || "Board Member";
      const rec = db.insert("board_members", {
        name,
        designation: req.body?.designation || "Director",
        description: req.body?.description || "",
        image_url: validImg(req.body?.image_url) ? req.body.image_url : portraitImage(name),
        facebook: req.body?.facebook || "",
        instagram: req.body?.instagram || "",
        linkedin: req.body?.linkedin || "",
      });
      return respond(201, rec);
    },
  },
  {
    method: "PATCH",
    path: "/board-members/:id",
    handler: (req) => {
      const existing = db.get("board_members", req.params.id);
      if (!existing) return respond(404, { message: "Member not found" });
      return respond(
        200,
        db.update("board_members", existing.id, {
          name: req.body?.name || existing.name,
          designation: req.body?.designation || existing.designation,
          description: req.body?.description ?? existing.description,
          image_url: validImg(req.body?.image_url) ? req.body.image_url : existing.image_url,
          facebook: req.body?.facebook ?? existing.facebook,
          instagram: req.body?.instagram ?? existing.instagram,
          linkedin: req.body?.linkedin ?? existing.linkedin,
        })
      );
    },
  },
  {
    method: "DELETE",
    path: "/board-members/:id",
    handler: (req) => {
      db.remove("board_members", req.params.id);
      return respond(200, { message: "Deleted" });
    },
  },

  // --- Global Presence ---
  { method: "GET", path: "/global-presence", handler: () => db.all("global_presence") },
  {
    method: "POST",
    path: "/global-presence",
    handler: (req) => {
      const rec = db.insert("global_presence", {
        continent: req.body?.continent || "Region",
        countries: parseCountries(req.body?.countries),
      });
      return respond(201, rec);
    },
  },
  {
    method: "PATCH",
    path: "/global-presence/:id",
    handler: (req) => {
      const existing = db.get("global_presence", req.params.id);
      if (!existing) return respond(404, { message: "Continent not found" });
      return respond(
        200,
        db.update("global_presence", existing.id, {
          continent: req.body?.continent || existing.continent,
          countries: req.body?.countries !== undefined ? parseCountries(req.body.countries) : existing.countries,
        })
      );
    },
  },
  {
    method: "DELETE",
    path: "/global-presence/:id",
    handler: (req) => {
      db.remove("global_presence", req.params.id);
      return respond(200, { message: "Deleted" });
    },
  },

  // --- Manufacturing Locations ---
  { method: "GET", path: "/manufacturing-locations", handler: () => db.all("manufacturing_locations") },
  {
    method: "POST",
    path: "/manufacturing-locations",
    handler: (req) => {
      const title = req.body?.title || "Manufacturing Facility";
      const img = req.body?.image || req.body?.imageurl;
      const rec = db.insert("manufacturing_locations", {
        title,
        location: req.body?.location || "",
        description: req.body?.description || "",
        imageurl: validImg(img) ? img : placeholderImage(title, { subtitle: req.body?.location || "" }),
      });
      return respond(201, rec);
    },
  },
  {
    method: "PUT",
    path: "/manufacturing-locations/:id",
    handler: (req) => {
      const existing = db.get("manufacturing_locations", req.params.id);
      if (!existing) return respond(404, { message: "Facility not found" });
      const img = req.body?.image || req.body?.imageurl;
      return respond(
        200,
        db.update("manufacturing_locations", existing.id, {
          title: req.body?.title || existing.title,
          location: req.body?.location ?? existing.location,
          description: req.body?.description ?? existing.description,
          imageurl: validImg(img) ? img : existing.imageurl,
        })
      );
    },
  },
  {
    method: "PATCH",
    path: "/manufacturing-locations/:id",
    handler: (req) => {
      const existing = db.get("manufacturing_locations", req.params.id);
      if (!existing) return respond(404, { message: "Facility not found" });
      const img = req.body?.image || req.body?.imageurl;
      return respond(
        200,
        db.update("manufacturing_locations", existing.id, {
          title: req.body?.title || existing.title,
          location: req.body?.location ?? existing.location,
          description: req.body?.description ?? existing.description,
          imageurl: validImg(img) ? img : existing.imageurl,
        })
      );
    },
  },
  {
    method: "DELETE",
    path: "/manufacturing-locations/:id",
    handler: (req) => {
      db.remove("manufacturing_locations", req.params.id);
      return respond(200, { message: "Deleted" });
    },
  },

  // --- Storage Power: Factory Informations ---
  { method: "GET", path: "/storage-power/factory-informations", handler: () => db.all("factory_informations") },
  {
    method: "POST",
    path: "/storage-power/factory-informations",
    handler: (req) => {
      const title = req.body?.factory_title || "Factory Information";
      const rec = db.insert("factory_informations", {
        factory_title: title,
        description: req.body?.description || "",
        corner_text: req.body?.corner_text || "",
        image_url: validImg(req.body?.image_url) ? req.body.image_url : placeholderImage(title),
      });
      return respond(201, rec);
    },
  },
  {
    method: "PATCH",
    path: "/storage-power/factory-informations/:id",
    handler: (req) => {
      const existing = db.get("factory_informations", req.params.id);
      if (!existing) return respond(404, { message: "Record not found" });
      return respond(
        200,
        db.update("factory_informations", existing.id, {
          factory_title: req.body?.factory_title || existing.factory_title,
          description: req.body?.description ?? existing.description,
          corner_text: req.body?.corner_text ?? existing.corner_text,
          image_url: validImg(req.body?.image_url) ? req.body.image_url : existing.image_url,
        })
      );
    },
  },
  {
    method: "DELETE",
    path: "/storage-power/factory-informations/:id",
    handler: (req) => {
      db.remove("factory_informations", req.params.id);
      return respond(200, { message: "Deleted" });
    },
  },

  // --- Storage Power: Milestone Image ---
  { method: "GET", path: "/storage-power/milestone-image", handler: () => db.all("milestone_images") },
  {
    method: "POST",
    path: "/storage-power/milestone-image",
    handler: (req) => {
      const rec = db.insert("milestone_images", {
        description: req.body?.description || "",
        image_url: validImg(req.body?.image_url) ? req.body.image_url : bannerImage("RSPB MILESTONES"),
      });
      return respond(201, rec);
    },
  },
  {
    method: "PATCH",
    path: "/storage-power/milestone-image/:id",
    handler: (req) => {
      const existing = db.get("milestone_images", req.params.id);
      if (!existing) return respond(404, { message: "Record not found" });
      return respond(
        200,
        db.update("milestone_images", existing.id, {
          description: req.body?.description ?? existing.description,
          image_url: validImg(req.body?.image_url) ? req.body.image_url : existing.image_url,
        })
      );
    },
  },
  {
    method: "DELETE",
    path: "/storage-power/milestone-image/:id",
    handler: (req) => {
      db.remove("milestone_images", req.params.id);
      return respond(200, { message: "Deleted" });
    },
  },

  // --- Storage Power: Our Values ---
  { method: "GET", path: "/storage-power/our-values", handler: () => db.all("our_values") },
  {
    method: "POST",
    path: "/storage-power/our-values",
    handler: (req) => {
      const caption = req.body?.caption || "Core Value";
      const rec = db.insert("our_values", {
        caption,
        image_url: validImg(req.body?.image_url) ? req.body.image_url : placeholderImage(caption, { width: 320, height: 320 }),
      });
      return respond(201, rec);
    },
  },
  {
    method: "PATCH",
    path: "/storage-power/our-values/:id",
    handler: (req) => {
      const existing = db.get("our_values", req.params.id);
      if (!existing) return respond(404, { message: "Record not found" });
      return respond(
        200,
        db.update("our_values", existing.id, {
          caption: req.body?.caption || existing.caption,
          image_url: validImg(req.body?.image_url) ? req.body.image_url : existing.image_url,
        })
      );
    },
  },
  {
    method: "DELETE",
    path: "/storage-power/our-values/:id",
    handler: (req) => {
      db.remove("our_values", req.params.id);
      return respond(200, { message: "Deleted" });
    },
  },

  // --- Storage Power: YouTube Videos ---
  { method: "GET", path: "/storage-power/youtube-video", handler: () => db.all("youtube_videos") },
  {
    method: "POST",
    path: "/storage-power/youtube-video",
    handler: (req) => {
      const rec = db.insert("youtube_videos", { video_url: req.body?.video_url || "" });
      return respond(201, rec);
    },
  },
  {
    method: "PATCH",
    path: "/storage-power/youtube-video/:id",
    handler: (req) => {
      const existing = db.get("youtube_videos", req.params.id);
      if (!existing) return respond(404, { message: "Record not found" });
      return respond(
        200,
        db.update("youtube_videos", existing.id, {
          video_url: req.body?.video_url ?? existing.video_url,
        })
      );
    },
  },
  {
    method: "DELETE",
    path: "/storage-power/youtube-video/:id",
    handler: (req) => {
      db.remove("youtube_videos", req.params.id);
      return respond(200, { message: "Deleted" });
    },
  },

  // --- Contact Global Locations ---
  { method: "GET", path: "/contact/global-locations", handler: () => db.all("contact_locations") },
  {
    method: "POST",
    path: "/contact/global-locations",
    handler: (req) => {
      const rec = db.insert("contact_locations", {
        location_title: req.body?.location_title || "",
        location_name: req.body?.location_name || "",
        location: req.body?.location || "",
        phone_numbers: req.body?.phone_numbers || "",
        email: req.body?.email || "",
        lat: Number(req.body?.lat) || 23.769,
        lng: Number(req.body?.lng) || 90.394,
      });
      return respond(201, rec);
    },
  },
  {
    method: "PATCH",
    path: "/contact/global-locations/:id",
    handler: (req) => {
      const existing = db.get("contact_locations", req.params.id);
      if (!existing) return respond(404, { message: "Location not found" });
      return respond(
        200,
        db.update("contact_locations", existing.id, {
          location_title: req.body?.location_title ?? existing.location_title,
          location_name: req.body?.location_name ?? existing.location_name,
          location: req.body?.location ?? existing.location,
          phone_numbers: req.body?.phone_numbers ?? existing.phone_numbers,
          email: req.body?.email ?? existing.email,
          lat: req.body?.lat !== undefined ? Number(req.body.lat) : existing.lat,
          lng: req.body?.lng !== undefined ? Number(req.body.lng) : existing.lng,
        })
      );
    },
  },
  {
    method: "DELETE",
    path: "/contact/global-locations/:id",
    handler: (req) => {
      db.remove("contact_locations", req.params.id);
      return respond(200, { message: "Deleted" });
    },
  },
]);
