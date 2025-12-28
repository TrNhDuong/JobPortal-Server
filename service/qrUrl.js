export function generateVietQRUrl(amount, addInfo = "PURCHASE-POINT") {
  const baseUrl = "https://img.vietqr.io/image";
  const bankCode = "vcb";
  const accountNumber = "1039500129";
  const accountName = "TRAN NHAT DUONG";

  const params = new URLSearchParams({
    amount: amount.toString(),
    addInfo: addInfo,
    accountName: accountName
  });

  return `${baseUrl}/${bankCode}-${accountNumber}-compact2.png?${params.toString()}`;
}
