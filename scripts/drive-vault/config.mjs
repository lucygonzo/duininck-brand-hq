// ============================================================
// Client Configuration: Duininck Companies
// Swap this file for a new client to regenerate the vault
// ============================================================

export const CLIENT = {
  name: 'Duininck Companies',
  shortName: 'Duininck',
  website: 'duininckcompanies.com',
  founded: '1926',
  headquarters: 'Willmar, Minnesota',
  tagline: 'People. Values. Growth.',
  generation: '4th',
  employees: '700+',
  fieldPercentage: '~90%',
  states: ['Minnesota', 'South Dakota', 'Texas', 'Georgia'],
  centennialYear: '2026',
  centennialDate: 'July 25, 2026',

  // CMO intel
  cmo: {
    name: 'Nicole Behne',
    title: 'CMO',
    startDate: 'May 2025',
    background: 'Hormel Foods (Fortune 200), Polaris',
    workStyle: 'Project-based only. Burned by retainers.',
    quote: '"I feel like I have more purpose in my work today than I ever have and I\'m working for a company that builds roads and golf courses."',
  },

  // Marketing team
  team: {
    size: 3,
    gap: 'No content strategist, no dedicated social, no internal comms platform. 3 people serving 700+ employees across 5+ states.',
  },

  // Subsidiaries
  subs: [
    { name: 'Prinsco', sector: 'Water Management', status: 'Independent', hq: 'Willmar, MN' },
    { name: 'Duininck Heavy Civil (Midwest)', sector: 'Construction', status: 'Core', hq: 'MN/SD' },
    { name: 'Duininck Heavy Civil (Texas)', sector: 'Construction', status: 'Core', hq: 'TX' },
    { name: 'Duininck Concrete', sector: 'Materials', status: 'Merging (being absorbed)', hq: 'Willmar, MN' },
    { name: 'Duininck Golf', sector: 'Golf Construction', status: 'Specialty/Niche', hq: 'Delano, MN & Atlanta, GA' },
    { name: 'Hart Ranch Golf Club', sector: 'Real Estate/Golf', status: 'Independent', hq: 'Rapid City, SD' },
    { name: 'Hart Ranch / Duininck Development', sector: 'Real Estate', status: 'Growth', hq: 'SD & Willmar, MN' },
  ],

  // Key competitors by subsidiary
  competitors: {
    heavyCivil: ['Ames Construction', 'C.S. McCrossan', 'Knife River (MDU Resources)', 'Aggregate Industries'],
    golf: ['Landscapes Unlimited', 'Wadsworth Golf', 'Heritage Links', 'McDonald & Sons'],
    waterManagement: ['ADS (Advanced Drainage Systems)', 'Hancor', 'Contech'],
    materials: ['Cemstone', 'Aggregate Industries', 'Knife River Materials'],
  },

  // Brand identity
  brand: {
    archetype: 'The Builder / The Steward',
    anchor: 'BUILT TO LAST',
    wedge: 'The Full Truck',
    wedgeDescription: 'When a Duininck truck pulls up on a site, it represents 100 years of earned trust, 4 generations of family commitment, the full weight of 6+ operating companies, and a values system that treats every employee as a whole person.',
    personality: ['Steadfast', 'Humble', 'Generous', 'Forward-Looking', 'Grounded'],
    values: ['Stewardship', 'Integrity', 'Servant Leadership', 'Family', 'Generosity'],
  },

  // Visual identity (current)
  colors: [
    { name: 'Duininck Teal', hex: '#004F71' },
    { name: 'Duininck Orange', hex: '#FE5000' },
    { name: 'Dark Navy', hex: '#1E293B' },
    { name: 'Warm Gray', hex: '#F7F6F3' },
  ],

  // Audience segments (confirmed by CMO)
  audiences: [
    'Public Works & General Contractors',
    'Golf Course Architects & Owners',
    'Prospective Employees (Seasonal + Full-Time)',
    'Current Employees (700+ Field Workers)',
    'Communities Where They Live & Work',
    'Agricultural Customers (Prinsco)',
  ],
};

// Drive vault root folder name
export const VAULT_ROOT = 'Duininck Brand HQ';
