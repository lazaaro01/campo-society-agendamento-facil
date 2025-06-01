declare module 'pix-payload' {
  const Pix: (data: {
    pixKey: string;
    merchantName: string;
    merchantCity: string;
    transactionAmount?: string;
    transactionId?: string;
    message?: string;
  }) => {
    payload: () => string;
  };

  export default Pix;
}