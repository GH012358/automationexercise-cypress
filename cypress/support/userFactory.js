export function makeUserData () {
    
    const ts = Date.now()
    const firstName = 'Ana'
    const lastName = 'Lopez'
        
    return {
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`,
        email: `ana.lopez+${ts}@example.com`,
        password: 'StrongP@ssw0rd!',
        company: 'ACME Corp',
        address1: '123 Main St',
        address2: 'Apt 4B',
        country: 'Canada',
        state: 'Ontario',
        city: 'Toronto',
        zipcode: 'M4B1B3',
        mobile: '+1-416-555-0100',
        day: '10',
        month: 'May',
        year: '1995',
    }
}