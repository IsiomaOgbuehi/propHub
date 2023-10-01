interface AgentPage1 {
    firstname: string
    middlename?: string
    lastname: string
    gender: string
}

interface AgentPage2 {
    firstname: string
    middlename?: string
    lastname: string
    gender: string
    phone: string
    email: string
    password: string
    confirmPassword: string
}

interface AgentPage3 {
    firstname: string
    middlename?: string
    lastname: string
    gender: string
    phone: string
    businessAddress: string
    email: string
    password: string
    confirmPassword: string
    lga: string
    state: string
    agentType: 'business' | 'artisan' | 'advertising'
}

interface State { 
    label: string;
    value: string
}

export {AgentPage1, AgentPage2, AgentPage3, State}