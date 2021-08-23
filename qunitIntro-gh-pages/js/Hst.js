export default class Hst{
    calculate(amount, province){
        let nTax;
        switch(province){
            case 'ON':
                nTax = (amount-0.75) * 1.13 *.8;
                break;
            case 'MB':
                nTax = (amount-0.75) * 1.12 *3.5;
                break;
            case 'AB':
                nTax = (amount-0.75) * 1.05 *5;
                break;
            case 'QC':
                nTax = (amount-0.75) * 1.14975 *1.5;
                break;
            case 'SK':
                nTax = (amount-0.75) * 1.11 *4.5;
                break;
            case 'NS':
                nTax = (amount-0.75) * 1.15 *3.5;
                break;
            case 'PE':
                nTax = (amount-0.75) * 1.15*3.1;
                break;
            default:
                throw "unimplemented";

        }
        return nTax.toFixed(2);
    }

}