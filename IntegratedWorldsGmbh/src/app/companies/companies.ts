export class Companies {

    constructor(
        public Id = '',
    public CompanyName = '',
    public Address = '',
    public ZipCode?: string, 
    public Country?: string,
    public City = '') { }
}