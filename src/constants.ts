export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  status?: 'In Review' | 'Interview Pending' | 'Available' | 'Waitlist' | 'New Arrival' | 'Verified' | 'Featured' | 'Eco Certified' | 'Tenant Choice';
  statusDate?: string;
}

export interface Alert {
  id: string;
  type: 'message' | 'check';
  title: string;
  content: string;
  time: string;
}

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'The Glass Pavilion',
    address: '1248 Oakwood Ave, Silver Lake, CA',
    price: 4200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0eB_tSi27f78h1EuWjBo7YdY-T27QJTkyNIFrsx9hC3MkT7JTvkZrDRzX1OfUUrs6GkeylN2kslo_4jA0CCwp_1XThIH8hxniG211Eo-GaiY4VTHjOYSH9LVyohyeH1UDq6-aKQKnmJ-KfqcV8U2WCITt40eeDCgq_ikBeMYzui4FZvAiL4ubzmuX1cNywkQKmaBXAwAKvaU3aBJvBYtfCoGbLGqFKBHy7bxKPDOY3-uWiWpNiE9KtF4SDjIHvpY-XtnBy7XLHII',
    beds: 3,
    baths: 2.5,
    sqft: 1450,
    type: 'House',
    status: 'In Review',
    statusDate: 'Applied 2 days ago'
  },
  {
    id: '2',
    title: 'Skyline Loft Apt 402',
    address: '900 High St, Downtown Los Angeles, CA',
    price: 3850,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBF-JDCOfrlcUPo53MT8u7Tzv20nOdmBWO_xu657xGiQGKx3xDjwqmgxc45PEvzbwNUcTeZqXGC_Um6tZcmKAmx12yb6OFJg4R6Lro8kUePP-y3szL_HLbvtjSJErK8_r2_8jtZf4U6kG5_JcgmbgFww-bdcdXx_MjdipXgIHwJ4PK4wsLpKCgSp7XXEuVM9CZfu1K4DY3gaNyd_P6XmfVMm6ACeFVsCZNTz5UlyjAR0puP-y1yS1YjL9dEnp_cj_4vjDtsLVjVsd0',
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: 'Apartment',
    status: 'Interview Pending',
    statusDate: 'Scheduled for Oct 14'
  },
  {
    id: '3',
    title: 'Bel Air Modern Estate',
    address: 'Bel Air, Los Angeles, CA',
    price: 12500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6Hh9Gh0pjCuBDZgDiAw1BugoNY1-w87EothneMqs7GzMvGNXBdVlwU7KeY0aSzg5GiIfDCuaUL73WZwXX5w-o1HebIJbHKKBKT7eQzqdDU-F8Wc0K1jZ85hEIzFZNA2_RMC164IthFQKC_ttkR9DqEtJshYPY_QKJ3Iesu_t6-YqeUJumUnITquM20uwQiNcOsNIigtNAI4p4TBONmCfi3J-CyIbdfPr9oE-nFeZii0ajXIdHtMDdL9T5YoRA7Zge9K1qiLhNpwY',
    beds: 6,
    baths: 8,
    sqft: 8500,
    type: 'Villa',
    status: 'Available'
  },
  {
    id: '4',
    title: 'The Echo Park Loft',
    address: 'Echo Park, Los Angeles, CA',
    price: 3100,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFzX6pslCfNntA5ayiz0EpHkBmJ7BpUd9pj3jMYFCxq_0FH_N5CqsH-Pkk96AiNOvzHR7Prpn7ODYWNcSAPQ28Mue_K19hMFazyypGi48xqzq98GS0e99yTZQ5C8v23rrh00Rtc1npsB3A-gGf0F21VFrHRlD6_sKfuGIemp7q9nATquRPcImXYf4S--6_n8-fLl5-oLmEQk3Ydt4JCKT54TdHaWTx0MS8FLlkxNAtuMK-IMRu5RpeuG0rqB5u0EW050ty3MIF2Xw',
    beds: 1,
    baths: 1,
    sqft: 900,
    type: 'Loft',
    status: 'Waitlist'
  },
  {
    id: '5',
    title: 'The Nordic Pavilion',
    address: 'Upper East Side, New York',
    price: 3250,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg_tmveRJ0U7A1vexGYN0zV3Z8-EFcHDbhIkofQMlSM8xH2B66zlHLuCkn8ehEp5dWJEvfibMATXnulgWARlAhtjgoy_nSJTRrbZBDIU9azYzQTHGPN__W2kmMVgQTIRbkpTtjly_Bwp3LqfHfxNIV_Do3y7Phjga1Z5_1VDZ9uqHdtn5UTFn6-eBp7zcFrXoCUhsHn5CszEVu_b0X7GBlbG5cfXXAqaeFoKj0QcWRysmrhNGzVqnf3LMpToaVucqfEuU-3UiXAcg',
    beds: 3,
    baths: 2,
    sqft: 1450,
    type: 'House',
    status: 'Verified'
  },
  {
    id: '6',
    title: 'The Glass Penthouse',
    address: 'Downtown Waterfront, Chicago',
    price: 4800,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1mbz4XsbtGadJhO4TkiLkAQ9J_KdmJ1GXdxt2KwEckRQAedNCgDm3I6xkVz1wZBYN8YNmfNbMU2sH3YEQOEyx0pk6x-vX3jUHRUg9E1p8youDef9zc3JEH_G6AAxJKRL_pHMokgPetwrtXEyvOUnG3u-tVJYYc79v4YEqhIdWbM4NKqJHLTdih1G4OufOecwUrCoNdwmQovwGeKbE1LbC9qZgyIZU7UsM3-ZyK6BE9YvreT4jCWqqgTWlZ5YB_5Zg54WdzbqBZW8',
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: 'Apartment',
    status: 'New Arrival'
  }
];

export const ALERTS: Alert[] = [
  {
    id: '1',
    type: 'message',
    title: 'New message from Landlord: Sarah Jenkins',
    content: '"Hi Alexander, I\'ve reviewed your credit report and everything looks great. Could we..."',
    time: '24 Minutes Ago'
  },
  {
    id: '2',
    type: 'check',
    title: 'Background Check Completed',
    content: 'Your premium screening report is now ready and has been shared with 2 properties.',
    time: '3 Hours Ago'
  }
];
