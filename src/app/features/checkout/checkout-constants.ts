type State = {
  name: string;
  salesTax: number;
};

const usStates: Map<string, State> = new Map([
  ['AL', { name: 'Alabama', salesTax: 0.04 }],
  ['AK', { name: 'Alaska', salesTax: 0 }],
  ['AZ', { name: 'Arizona', salesTax: 0.056 }],
  ['AR', { name: 'Arkansas', salesTax: 0.065 }],
  ['CA', { name: 'California', salesTax: 0.0825 }],
  ['CO', { name: 'Colorado', salesTax: 0.029 }],
  ['CT', { name: 'Connecticut', salesTax: 0.0635 }],
  ['DE', { name: 'Delaware', salesTax: 0 }],
  ['FL', { name: 'Florida', salesTax: 0.06 }],
  ['GA', { name: 'Georgia', salesTax: 0.04 }],
  ['HI', { name: 'Hawaii', salesTax: 0.04 }],
  ['ID', { name: 'Idaho', salesTax: 0.06 }],
  ['IL', { name: 'Illinois', salesTax: 0.0625 }],
  ['IN', { name: 'Indiana', salesTax: 0.07 }],
  ['IA', { name: 'Iowa', salesTax: 0.06 }],
  ['KS', { name: 'Kansas', salesTax: 0.065 }],
  ['KY', { name: 'Kentucky', salesTax: 0.06 }],
  ['LA', { name: 'Louisiana', salesTax: 0.04 }],
  ['ME', { name: 'Maine', salesTax: 0.055 }],
  ['MD', { name: 'Maryland', salesTax: 0.06 }],
  ['MA', { name: 'Massachusetts', salesTax: 0.0625 }],
  ['MI', { name: 'Michigan', salesTax: 0.06 }],
  ['MN', { name: 'Minnesota', salesTax: 0.06875 }],
  ['MS', { name: 'Mississippi', salesTax: 0.07 }],
  ['MO', { name: 'Missouri', salesTax: 0.04225 }],
  ['MT', { name: 'Montana', salesTax: 0 }],
  ['NE', { name: 'Nebraska', salesTax: 0.055 }],
  ['NV', { name: 'Nevada', salesTax: 0.0685 }],
  ['NH', { name: 'New Hampshire', salesTax: 0 }],
  ['NJ', { name: 'New Jersey', salesTax: 0.06625 }],
  ['NM', { name: 'New Mexico', salesTax: 0.05125 }],
  ['NY', { name: 'New York', salesTax: 0.04 }],
  ['NC', { name: 'North Carolina', salesTax: 0.0475 }],
  ['ND', { name: 'North Dakota', salesTax: 0.05 }],
  ['OH', { name: 'Ohio', salesTax: 0.0575 }],
  ['OK', { name: 'Oklahoma', salesTax: 0.045 }],
  ['OR', { name: 'Oregon', salesTax: 0 }],
  ['PA', { name: 'Pennsylvania', salesTax: 0.06 }],
  ['RI', { name: 'Rhode Island', salesTax: 0.07 }],
  ['SC', { name: 'South Carolina', salesTax: 0.06 }],
  ['SD', { name: 'South Dakota', salesTax: 0 }],
  ['TN', { name: 'Tennessee', salesTax: 0.07 }],
  ['TX', { name: 'Texas', salesTax: 0.0625 }],
  ['UT', { name: 'Utah', salesTax: 0.047 }],
  ['VT', { name: 'Vermont', salesTax: 0.06 }],
  ['VA', { name: 'Virginia', salesTax: 0.043 }],
  ['WA', { name: 'Washington', salesTax: 0.065 }],
  ['WV', { name: 'West Virginia', salesTax: 0.06 }],
  ['WI', { name: 'Wisconsin', salesTax: 0.05 }],
  ['WY', { name: 'Wyoming', salesTax: 0.04 }],
]);

export const usStateNames = new Map<string, string>();
usStates.forEach((value, key) => {
  usStateNames.set(key, value.name);
});

export const usStateSalesTax = new Map<string, number>();
usStates.forEach((value, key) => {
  usStateSalesTax.set(key, value.salesTax);
});
