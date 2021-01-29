export class CreateSmartphoneDto {
    readonly images: unknown;
    readonly details: {
        readonly brand: string;
        readonly model: string;
        readonly shopLink: string;
        readonly screen: string;
        readonly battery: string;
        readonly ram: string;
        readonly memory: string;
        readonly description: string;
        readonly price: string;
    }
}
