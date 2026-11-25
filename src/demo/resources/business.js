// Demo seed data & mock API routes for auth, users, customer queries,
// dealers, dealer applications, and warranty services.

import { DEMO_ADMIN } from "../config";
import { db, registerSeed } from "../db";
import { registerRoutes, respond } from "../mockServer";
import { placeholderImage } from "../images";

const validImg = (v) =>
  typeof v === "string" && (v.startsWith("data:") || v.startsWith("http") || v.startsWith("/"));

const norm = (s = "") => String(s).trim().toLowerCase();

// ---------------------------------------------------------------------------
// Seed data
// ---------------------------------------------------------------------------

const USERS_SEED = [
  {
    id: 1,
    username: DEMO_ADMIN.username,
    emp_id: "RA-1001",
    email: DEMO_ADMIN.email,
    password: DEMO_ADMIN.password,
    role: "Super Admin",
    joined_at: "2024-01-10",
  },
  {
    id: 2,
    username: "Rafiqul Islam",
    emp_id: "RA-1042",
    email: "rafiq@rahimafrooz-demo.com",
    password: DEMO_ADMIN.password,
    role: "Admin",
    joined_at: "2024-04-18",
  },
  {
    id: 3,
    username: "Sadia Afrin",
    emp_id: "RA-1087",
    email: "sadia@rahimafrooz-demo.com",
    password: DEMO_ADMIN.password,
    role: "Admin",
    joined_at: "2024-08-05",
  },
  {
    id: 4,
    username: "Ashraful Karim",
    emp_id: "RA-1103",
    email: "ashraful@rahimafrooz-demo.com",
    password: DEMO_ADMIN.password,
    role: "Super Admin",
    joined_at: "2025-02-12",
  },
];

const CONTACTS_SEED = [
  {
    id: 1,
    customer_name: "Imran Hossain",
    fullName: "Imran Hossain",
    email: "imran.hossain@example.com",
    phone_number: "01711223344",
    phoneNo: "01711223344",
    message: "Looking for an authorized Globatt Hybrid battery replacement in Dhanmondi for my 2021 Toyota Prius.",
    messaged_at: "2026-10-12",
  },
  {
    id: 2,
    customer_name: "Sharmeen Akter",
    fullName: "Sharmeen Akter",
    email: "sharmeen.akter@example.com",
    phone_number: "01815667788",
    phoneNo: "01815667788",
    message: "Please share pricing and installation details for two RT-200 Tall Tubular IPS batteries in Uttara.",
    messaged_at: "2026-10-18",
  },
  {
    id: 3,
    customer_name: "Rezaul Karim",
    fullName: "Rezaul Karim",
    email: "rezaul.fleet@example.com",
    phone_number: "01911889900",
    phoneNo: "01911889900",
    message: "We manage a 40-truck logistics fleet in Chattogram and would like a corporate quotation for Volta N150 batteries.",
    messaged_at: "2026-10-25",
  },
  {
    id: 4,
    customer_name: "Mehedi Hasan",
    fullName: "Mehedi Hasan",
    email: "mehedi.solar@example.com",
    phone_number: "01677334455",
    phoneNo: "01677334455",
    message: "Need technical datasheet for Delta OPzV 200Ah Solar Gel batteries for an off-grid cold storage project.",
    messaged_at: "2026-11-02",
  },
  {
    id: 5,
    customer_name: "Tasnim Tabassum",
    fullName: "Tasnim Tabassum",
    email: "tasnim.t@example.com",
    phone_number: "01755443322",
    phoneNo: "01755443322",
    message: "Can I register my Globatt DIN66 warranty online if I bought it last week from Banani Auto Care?",
    messaged_at: "2026-11-09",
  },
  {
    id: 6,
    customer_name: "Saiful Alam",
    fullName: "Saiful Alam",
    email: "saiful.alam@example.com",
    phone_number: "01822998877",
    phoneNo: "01822998877",
    message: "Requesting dealer contact in Bogura town for Lucas Tractor 88Ah batteries.",
    messaged_at: "2026-11-16",
  },
];

const DEALER_APPLICATIONS_SEED = [
  {
    id: 1,
    full_name: "Jahangir Alam",
    company_name: "Padma Auto Power House",
    phone: "01711900112",
    email: "jahangir@padmapower.example.com",
    district: "Dhaka",
    thana: "Mirpur",
    zip: "1216",
    applied_at: "2026-09-21",
  },
  {
    id: 2,
    full_name: "Mizanur Rahman",
    company_name: "Karnaphuli Battery Mart",
    phone: "01819334411",
    email: "mizan@karnaphulibattery.example.com",
    district: "Chattogram",
    thana: "Agrabad",
    zip: "4100",
    applied_at: "2026-10-03",
  },
  {
    id: 3,
    full_name: "Nizam Uddin Chowdhury",
    company_name: "Surma Energy & Motors",
    phone: "01712556677",
    email: "nizam@surmaenergy.example.com",
    district: "Sylhet",
    thana: "Zindabazar",
    zip: "3100",
    applied_at: "2026-10-14",
  },
  {
    id: 4,
    full_name: "Anisur Rahman",
    company_name: "Barendra Solar & Battery Center",
    phone: "01914778899",
    email: "anis@barendrasolar.example.com",
    district: "Rajshahi",
    thana: "Boalia",
    zip: "6100",
    applied_at: "2026-10-27",
  },
  {
    id: 5,
    full_name: "Habibur Rahman",
    company_name: "Sundarban Auto Electric",
    phone: "01716223399",
    email: "habib@sundarbanauto.example.com",
    district: "Khulna",
    thana: "Sonadanga",
    zip: "9100",
    applied_at: "2026-11-05",
  },
  {
    id: 6,
    full_name: "Sajjad Hossain",
    company_name: "Teesta Power Enterprise",
    phone: "01720889911",
    email: "sajjad@teestapower.example.com",
    district: "Rangpur",
    thana: "Kotwali",
    zip: "5400",
    applied_at: "2026-11-18",
  },
];

const mkDealer = (id, shop_name, division, district, thana, address, proprietor_name, phone_numbers, email, lat, lng) => ({
  id,
  shop_name,
  address,
  proprietor_name,
  phone_numbers,
  email,
  google_map_link: `https://maps.google.com/?q=${lat},${lng}`,
  division,
  district,
  thana,
  image_url: placeholderImage(shop_name, { subtitle: `${thana}, ${district} · Authorized Dealer`, bg: "#005bab" }),
});

const DEALERS_SEED = [
  mkDealer(1, "Tejgaon Flagship Battery Care", "Dhaka", "Dhaka", "Tejgaon", "142 Tejgaon Industrial Area, Dhaka-1208", "Md. Zakir Hossain", "01711-220011", "tejgaon@ra-dealer.demo", 23.7638, 90.4066),
  mkDealer(2, "Dhanmondi Auto Power Point", "Dhaka", "Dhaka", "Dhanmondi", "House 18, Road 27, Dhanmondi, Dhaka-1209", "Ariful Islam", "01711-220012", "dhanmondi@ra-dealer.demo", 23.7511, 90.3742),
  mkDealer(3, "Uttara Globatt Express", "Dhaka", "Dhaka", "Uttara", "Plot 34, Sector 7, Uttara, Dhaka-1230", "Sohel Rana", "01819-220013", "uttara@ra-dealer.demo", 23.8682, 90.3995),
  mkDealer(4, "Mirpur Super Battery House", "Dhaka", "Dhaka", "Mirpur", "Section 10 Roundabout, Mirpur, Dhaka-1216", "Kabir Uddin", "01911-220014", "mirpur@ra-dealer.demo", 23.8069, 90.3687),
  mkDealer(5, "Banani Premium Auto Care", "Dhaka", "Dhaka", "Banani", "Road 11, Block F, Banani, Dhaka-1213", "Tariq Mahmud", "01713-220015", "banani@ra-dealer.demo", 23.7937, 90.4066),
  mkDealer(6, "Gazipur Highway Battery Mart", "Dhaka", "Gazipur", "Tongi", "Station Road, Tongi, Gazipur-1710", "Shahidul Islam", "01715-220016", "tongi@ra-dealer.demo", 23.8979, 90.4023),
  mkDealer(7, "Joydebpur Power Solutions", "Dhaka", "Gazipur", "Gazipur Sadar", "Chandona Chowrasta, Gazipur-1702", "Delwar Hossain", "01716-220017", "joydebpur@ra-dealer.demo", 23.9999, 90.4203),
  mkDealer(8, "Narayanganj Riverport Batteries", "Dhaka", "Narayanganj", "Narayanganj Sadar", "Chashara Crossing, Narayanganj-1400", "Moniruzzaman", "01817-220018", "naryanganj@ra-dealer.demo", 23.6238, 90.5000),
  mkDealer(9, "Agrabad Port City Battery Hub", "Chattogram", "Chattogram", "Agrabad", "Sk. Mujib Road, Agrabad, Chattogram-4100", "Nurul Absar", "01819-330021", "agrabad@ra-dealer.demo", 22.3269, 91.8124),
  mkDealer(10, "GEC Circle Auto Energy", "Chattogram", "Chattogram", "Panchlaish", "CDA Avenue, GEC Circle, Chattogram-4000", "Faisal Chowdhury", "01711-330022", "gec@ra-dealer.demo", 22.3591, 91.8215),
  mkDealer(11, "Cox's Bazar Marine & Auto Power", "Chattogram", "Cox's Bazar", "Cox's Bazar Sadar", "Kalatoli Main Road, Cox's Bazar-4700", "Mahbubur Rahman", "01818-330023", "coxsbazar@ra-dealer.demo", 21.4272, 92.0058),
  mkDealer(12, "Cumilla Cantonment Battery Zone", "Chattogram", "Cumilla", "Kotwali", "Kandirpar Main Road, Cumilla-3500", "Ashraf Ali", "01712-330024", "cumilla@ra-dealer.demo", 23.4607, 91.1809),
  mkDealer(13, "Zindabazar Royal Battery Center", "Sylhet", "Sylhet", "Kotwali", "Ambarkhana–Zindabazar Link Road, Sylhet-3100", "Badrul Islam", "01711-440031", "sylhet@ra-dealer.demo", 24.8949, 91.8687),
  mkDealer(14, "Moulvibazar Tea Valley Power", "Sylhet", "Moulvibazar", "Sreemangal", "Station Road, Sreemangal, Moulvibazar-3210", "Kamal Ahmed", "01714-440032", "sreemangal@ra-dealer.demo", 24.3065, 91.7296),
  mkDealer(15, "Rajshahi Silk City Batteries", "Rajshahi", "Rajshahi", "Boalia", "Shaheb Bazar Zero Point, Rajshahi-6100", "Shafiqul Alam", "01712-550041", "rajshahi@ra-dealer.demo", 24.3636, 88.6241),
  mkDealer(16, "Bogura North Bengal Power House", "Rajshahi", "Bogura", "Bogura Sadar", "Satmatha Commercial Plaza, Bogura-5800", "Lutfar Rahman", "01713-550042", "bogura@ra-dealer.demo", 24.8465, 89.3773),
  mkDealer(17, "Khulna Shipyard Battery Point", "Khulna", "Khulna", "Sonadanga", "KDA Avenue, Sonadanga, Khulna-9100", "Moshiur Rahman", "01711-660051", "khulna@ra-dealer.demo", 22.8158, 89.5460),
  mkDealer(18, "Jashore Benapole Fleet Batteries", "Khulna", "Jashore", "Jashore Sadar", "RN Road, Jashore-7400", "Golam Mostafa", "01715-660052", "jashore@ra-dealer.demo", 23.1634, 89.2182),
  mkDealer(19, "Barishal Launch Ghat Energy", "Barishal", "Barishal", "Kotwali", "Sadar Road, Barishal-8200", "Nazrul Islam", "01716-770061", "barishal@ra-dealer.demo", 22.7010, 90.3535),
  mkDealer(20, "Rangpur Central Battery Mart", "Rangpur", "Rangpur", "Kotwali", "Jahaj Company More, Rangpur-5400", "Mominul Haque", "01717-880071", "rangpur@ra-dealer.demo", 25.7439, 89.2752),
  mkDealer(21, "Dinajpur Agro & Tractor Power", "Rangpur", "Dinajpur", "Dinajpur Sadar", "Kalitola More, Dinajpur-5200", "Rashedul Islam", "01718-880072", "dinajpur@ra-dealer.demo", 25.6279, 88.6332),
  mkDealer(22, "Mymensingh Town Hall Batteries", "Mymensingh", "Mymensingh", "Kotwali", "Charpara Main Road, Mymensingh-2200", "Anwarul Kabir", "01719-990081", "mymensingh@ra-dealer.demo", 24.7471, 90.4203),
];

const WARRANTY_SEED = [
  {
    id: 1,
    name: "Tanvir Ahmed",
    email: "tanvir.ahmed@example.com",
    phone_number: "01711223344",
    short_code: "GB-N70Z",
    vehicle_type: "Toyota Land Cruiser Prado",
    purchase_date: "2026-06-15T00:00:00.000Z",
    purchase_dlr: "Tejgaon Flagship Battery Care",
    total_warranty: 24,
    warranty_deadline: "2028-06-15T00:00:00.000Z",
    approval_status: true,
  },
  {
    id: 2,
    name: "Nadia Chowdhury",
    email: "nadia.c@example.com",
    phone_number: "01819887766",
    short_code: "GB-DIN66",
    vehicle_type: "Honda Civic 2022",
    purchase_date: "2026-02-20T00:00:00.000Z",
    purchase_dlr: "Banani Premium Auto Care",
    total_warranty: 24,
    warranty_deadline: "2028-02-20T00:00:00.000Z",
    approval_status: true,
  },
  {
    id: 3,
    name: "Sajidul Islam",
    email: "sajidul@example.com",
    phone_number: "01712345678",
    short_code: "GB-S46B24R",
    vehicle_type: "Toyota Prius Hybrid 2021",
    purchase_date: "2026-04-10T00:00:00.000Z",
    purchase_dlr: "Dhanmondi Auto Power Point",
    total_warranty: 24,
    warranty_deadline: "2028-04-10T00:00:00.000Z",
    approval_status: true,
  },
  {
    id: 4,
    name: "Mahmudul Hasan",
    email: "mahmud.fleet@example.com",
    phone_number: "01811445566",
    short_code: "VL-N150HD",
    vehicle_type: "Hino AK1J Commercial Bus",
    purchase_date: "2026-05-01T00:00:00.000Z",
    purchase_dlr: "Agrabad Port City Battery Hub",
    total_warranty: 18,
    warranty_deadline: "2027-11-01T00:00:00.000Z",
    approval_status: true,
  },
  {
    id: 5,
    name: "Farhana Rahman",
    email: "farhana.r@example.com",
    phone_number: "01755667788",
    short_code: "RA-RT200",
    vehicle_type: "Home IPS 1500VA",
    purchase_date: "2026-01-12T00:00:00.000Z",
    purchase_dlr: "Zindabazar Royal Battery Center",
    total_warranty: 30,
    warranty_deadline: "2028-07-12T00:00:00.000Z",
    approval_status: true,
  },
  {
    id: 6,
    name: "Rashedul Karim",
    email: "rashedul.k@example.com",
    phone_number: "01912345678",
    short_code: "VL-IPS150",
    vehicle_type: "Home IPS 1000VA",
    purchase_date: "2026-11-18T00:00:00.000Z",
    purchase_dlr: "Uttara Globatt Express",
    total_warranty: null,
    warranty_deadline: null,
    approval_status: false,
  },
  {
    id: 7,
    name: "Ashiqur Rahman",
    email: "ashiqur.r@example.com",
    phone_number: "01678901234",
    short_code: "GB-NS60L",
    vehicle_type: "Toyota Corolla Axio 2020",
    purchase_date: "2026-11-20T00:00:00.000Z",
    purchase_dlr: "Mirpur Super Battery House",
    total_warranty: null,
    warranty_deadline: null,
    approval_status: false,
  },
  {
    id: 8,
    name: "Nusrat Jahan",
    email: "nusrat.j@example.com",
    phone_number: "01733445599",
    short_code: "RA-SOL130",
    vehicle_type: "Rooftop Solar Hybrid 3kW",
    purchase_date: "2026-11-22T00:00:00.000Z",
    purchase_dlr: "Khulna Shipyard Battery Point",
    total_warranty: null,
    warranty_deadline: null,
    approval_status: false,
  },
];

registerSeed("users", USERS_SEED);
registerSeed("contacts", CONTACTS_SEED);
registerSeed("dealer_applications", DEALER_APPLICATIONS_SEED);
registerSeed("dealers", DEALERS_SEED);
registerSeed("warranty_services", WARRANTY_SEED);

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------

const stripPassword = (user) => {
  const copy = { ...user };
  delete copy.password;
  return copy;
};

registerRoutes([
  // --- Auth ---
  {
    method: "POST",
    path: "/auth/login",
    handler: (req) => {
      const email = norm(req.body?.email);
      const password = String(req.body?.password || "");
      const user = db.find("users", (u) => norm(u.email) === email);
      if (!user || user.password !== password) {
        return respond(401, { message: "Invalid email or password!" });
      }
      return respond(200, {
        username: user.username,
        email: user.email,
        role: user.role,
        token: `demo-token-${user.id}-${Date.now()}`,
      });
    },
  },
  {
    method: "PATCH",
    path: "/auth/:email",
    handler: (req) => {
      const user = db.find("users", (u) => norm(u.email) === norm(req.params.email));
      if (!user) return respond(404, { message: "No account found with that email." });
      return respond(200, { message: "Demo mode: Password reset link simulated for " + user.email });
    },
  },

  // --- Users ---
  {
    method: "GET",
    path: "/users",
    handler: () => db.all("users").map(stripPassword),
  },
  {
    method: "POST",
    path: "/users",
    handler: (req) => {
      const email = String(req.body?.email || "").trim();
      if (!email) return respond(400, { message: "Email is required" });
      if (db.find("users", (u) => norm(u.email) === norm(email))) {
        return respond(409, { message: "User with this email already exists" });
      }
      const rec = db.insert("users", {
        username: req.body?.username || "New Admin",
        emp_id: req.body?.emp_id || `RA-${Math.floor(1000 + Math.random() * 9000)}`,
        email,
        password: req.body?.password || DEMO_ADMIN.password,
        role: req.body?.role || "Admin",
        joined_at: new Date().toISOString().slice(0, 10),
      });
      return respond(201, stripPassword(rec));
    },
  },
  {
    method: "PATCH",
    path: "/users/update-username/:email",
    handler: (req) => {
      const user = db.find("users", (u) => norm(u.email) === norm(req.params.email));
      if (!user) return respond(404, "User not found");
      db.update("users", user.id, { username: req.body?.username || user.username });
      return respond(200, "Username updated successfully!");
    },
  },
  {
    method: "PATCH",
    path: "/users/update-password/:email",
    handler: (req) => {
      const user = db.find("users", (u) => norm(u.email) === norm(req.params.email));
      if (!user) return respond(404, "User not found!");
      if (req.body?.password !== user.password) {
        return respond(400, "Current password does not match!");
      }
      db.update("users", user.id, { password: req.body?.newPassword });
      return respond(200, "Password updated successfully!");
    },
  },
  {
    method: "PATCH",
    path: "/users/:id",
    handler: (req) => {
      const existing = db.get("users", req.params.id);
      if (!existing) return respond(404, { message: "User not found" });
      const updated = db.update("users", existing.id, {
        username: req.body?.username ?? existing.username,
        emp_id: req.body?.emp_id ?? existing.emp_id,
        email: req.body?.email ?? existing.email,
        role: req.body?.role ?? existing.role,
      });
      return respond(200, stripPassword(updated));
    },
  },
  {
    method: "DELETE",
    path: "/users/:id",
    handler: (req) => {
      db.remove("users", req.params.id);
      return respond(200, { message: "User deleted" });
    },
  },

  // --- Customer Queries (/contact) ---
  { method: "GET", path: "/contact", handler: () => db.all("contacts") },
  {
    method: "POST",
    path: "/contact",
    handler: (req) => {
      const name = req.body?.customerName || req.body?.customer_name || req.body?.fullName || "Visitor";
      const phone = req.body?.phoneNo || req.body?.phone_number || "";
      const rec = db.insert("contacts", {
        customer_name: name,
        fullName: name,
        email: req.body?.email || "",
        phone_number: phone,
        phoneNo: phone,
        message: req.body?.message || "",
        messaged_at: new Date().toISOString().slice(0, 10),
      });
      return respond(201, rec);
    },
  },
  {
    method: "DELETE",
    path: "/contact",
    handler: (req) => {
      const ids = Array.isArray(req.body) ? req.body.map(String) : [String(req.body)];
      db.set(
        "contacts",
        db.all("contacts").filter((c) => !ids.includes(String(c.id)))
      );
      return respond(200, { message: "Selected queries deleted" });
    },
  },

  // --- Dealer Applications ---
  { method: "GET", path: "/dealer-applications", handler: () => db.all("dealer_applications") },
  {
    method: "POST",
    path: "/dealer-applications",
    handler: (req) => {
      const rec = db.insert("dealer_applications", {
        full_name: req.body?.fullName || req.body?.full_name || "",
        company_name: req.body?.companyName || req.body?.company_name || "",
        phone: req.body?.phoneNumber || req.body?.phone || "",
        email: req.body?.email || "",
        district: req.body?.district || "",
        thana: req.body?.thana || "",
        zip: req.body?.zip || "",
        applied_at: new Date().toISOString().slice(0, 10),
      });
      return respond(201, rec);
    },
  },
  {
    method: "DELETE",
    path: "/dealer-applications/:id",
    handler: (req) => {
      db.remove("dealer_applications", req.params.id);
      return respond(200, { message: "Application deleted" });
    },
  },

  // --- Dealers ---
  { method: "GET", path: "/dealer-details", handler: () => db.all("dealers") },
  {
    method: "POST",
    path: "/dealer-details/selected-dealers",
    handler: (req) => {
      const all = db.all("dealers");
      const ids = Array.isArray(req.body) ? req.body.map(String) : [];
      if (ids.length === 0) return all.slice(0, 6);
      return all.filter((d) => ids.includes(String(d.id)));
    },
  },
  {
    method: "POST",
    path: "/dealer-details",
    handler: (req) => {
      const shopName = req.body?.shop_name || "Authorized Dealer";
      const rec = db.insert("dealers", {
        shop_name: shopName,
        address: req.body?.address || "",
        proprietor_name: req.body?.proprietor_name || "",
        phone_numbers: req.body?.phone_numbers || "",
        email: req.body?.email || "",
        google_map_link: req.body?.google_map_link || "",
        division: req.body?.division || "Dhaka",
        district: req.body?.district || "Dhaka",
        thana: req.body?.thana || "",
        image_url: validImg(req.body?.image_url)
          ? req.body.image_url
          : placeholderImage(shopName, { subtitle: "Authorized Dealer" }),
      });
      return respond(201, rec);
    },
  },
  {
    method: "PATCH",
    path: "/dealer-details/:id",
    handler: (req) => {
      const existing = db.get("dealers", req.params.id);
      if (!existing) return respond(404, { message: "Dealer not found" });
      return respond(
        200,
        db.update("dealers", existing.id, {
          shop_name: req.body?.shop_name || existing.shop_name,
          address: req.body?.address ?? existing.address,
          proprietor_name: req.body?.proprietor_name ?? existing.proprietor_name,
          phone_numbers: req.body?.phone_numbers ?? existing.phone_numbers,
          email: req.body?.email ?? existing.email,
          google_map_link: req.body?.google_map_link ?? existing.google_map_link,
          division: req.body?.division ?? existing.division,
          district: req.body?.district ?? existing.district,
          thana: req.body?.thana ?? existing.thana,
          image_url: validImg(req.body?.image_url) ? req.body.image_url : existing.image_url,
        })
      );
    },
  },
  {
    method: "DELETE",
    path: "/dealer-details/:id",
    handler: (req) => {
      db.remove("dealers", req.params.id);
      return respond(200, { message: "Dealer deleted" });
    },
  },

  // --- Warranty Services ---
  { method: "GET", path: "/warranty-services", handler: () => db.all("warranty_services") },
  {
    method: "POST",
    path: "/warranty-services",
    handler: (req) => {
      const rec = db.insert("warranty_services", {
        name: req.body?.name || "",
        email: req.body?.email || "",
        phone_number: String(req.body?.phone_number || "").trim(),
        short_code: String(req.body?.short_code || "").trim(),
        vehicle_type: req.body?.vehicle_type || "",
        purchase_date: req.body?.purchase_date || new Date().toISOString().slice(0, 10),
        purchase_dlr: req.body?.purchase_dlr || "",
        total_warranty: null,
        warranty_deadline: null,
        approval_status: false,
      });
      return respond(201, rec);
    },
  },
  {
    method: "GET",
    path: "/warranty-services/status-check/:short_code/:phone_number",
    handler: (req) => {
      const code = norm(req.params.short_code);
      const phone = norm(req.params.phone_number);
      const matched = db.filter(
        "warranty_services",
        (w) => norm(w.short_code) === code && norm(w.phone_number) === phone
      );
      if (matched.length === 0) {
        return respond(404, "No warranty record found for this Short Code and Phone Number.");
      }
      return respond(200, matched);
    },
  },
  {
    method: "PATCH",
    path: "/warranty-services/:id",
    handler: (req) => {
      const existing = db.get("warranty_services", req.params.id);
      if (!existing) return respond(404, { message: "Warranty record not found" });
      const hasApprovalFields = Boolean(req.body?.warranty_deadline || req.body?.total_warranty);
      return respond(
        200,
        db.update("warranty_services", existing.id, {
          ...req.body,
          total_warranty: req.body?.total_warranty ? Number(req.body.total_warranty) : existing.total_warranty,
          warranty_deadline: req.body?.warranty_deadline || existing.warranty_deadline,
          approval_status: hasApprovalFields ? true : (req.body?.approval_status ?? existing.approval_status),
        })
      );
    },
  },
  {
    method: "DELETE",
    path: "/warranty-services/:id",
    handler: (req) => {
      db.remove("warranty_services", req.params.id);
      return respond(200, { message: "Deleted" });
    },
  },
]);
