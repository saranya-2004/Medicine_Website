document.addEventListener('DOMContentLoaded', function () {
    const medicineDetails = {
        productName: "Example Tablet",
        productId: "1234567890",
        mfgDate: "2024-01-01",
        expiryDate: "2026-01-01",
        fdaAuthorized: "Yes",
        fdaId: "FDA123456",
        batchNumber: "BATCH987654",
        manufacturer: "PharmaCo Inc."
    };

    // Populate the fields with the data
    document.getElementById('productName').textContent = medicineDetails.productName;
    document.getElementById('productId').textContent = medicineDetails.productId;
    document.getElementById('mfgDate').textContent = medicineDetails.mfgDate;
    document.getElementById('expiryDate').textContent = medicineDetails.expiryDate;
    document.getElementById('fdaAuthorized').textContent = medicineDetails.fdaAuthorized;
    document.getElementById('fdaId').textContent = medicineDetails.fdaId;
    document.getElementById('batchNumber').textContent = medicineDetails.batchNumber;
    document.getElementById('manufacturer').textContent = medicineDetails.manufacturer;
});

