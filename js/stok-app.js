new Vue({
    el: '#app',
    data: {
        stockData: [],
        upbjjList: [],
        filter: {
            upbjj: '',
            kategori: '',
            reorderOnly: false
        },
        sortKey: 'judul',
        newForm: {
            kode: '',
            judul: '',
            upbjj: '',
            qty: null,
            safety: null,
            kategori: 'BMP',
            lokasiRak: 'NEW-01',
            catatanHTML: 'Data baru ditambahkan.'
        },
        editForm: {
            qty: 0,
            safety: 0,
            catatanHTML: ''
        },
        editingItem: null,
        validationMsg: '',
        lastAddedTitle: ''
    },
    mounted() {
        // Load data from global window variables defined in dataBahanAjar.js
        this.stockData = [...window.dataBahanAjarInitial];
        this.upbjjList = window.upbjjList;
    },
    computed: {
        // Dependent categories based on selected UPBJJ
        availableCategories() {
            if (!this.filter.upbjj) return [];
            const found = this.upbjjList.find(item => item.nama === this.filter.upbjj);
            return found ? found.kategori : [];
        },
        // Filtered and Sorted Stock (using computed to optimize)
        filteredStock() {
            let result = this.stockData;

            // 1. Region Filter
            if (this.filter.upbjj) {
                result = result.filter(item => item.upbjj === this.filter.upbjj);
            }

            // 2. Category Filter
            if (this.filter.kategori) {
                result = result.filter(item => item.kategori === this.filter.kategori);
            }

            // 3. Re-order Filter (Qty < Safety OR Qty == 0)
            if (this.filter.reorderOnly) {
                result = result.filter(item => item.qty < item.safety || item.qty === 0);
            }

            // 4. Sorting
            return result.sort((a, b) => {
                if (this.sortKey === 'judul') {
                    return a.judul.localeCompare(b.judul);
                } else if (this.sortKey === 'qty') {
                    return a.qty - b.qty;
                } else if (this.sortKey === 'harga') {
                    return (a.harga || 0) - (b.harga || 0);
                }
                return 0;
            });
        }
    },
    watch: {
        // Watcher 1: If region changes, reset the category filter
        'filter.upbjj': function(newVal) {
            console.log(`Region changed to: ${newVal}. Resetting category.`);
            this.filter.kategori = '';
        },
        // Watcher 2: Monitor new stock input to provide live feedback
        'newForm.qty': function(newVal) {
            if (newVal !== null && this.newForm.safety !== null) {
                if (newVal < this.newForm.safety) {
                    this.validationMsg = 'Peringatan: Stok yang diinput di bawah batas safety.';
                } else {
                    this.validationMsg = '';
                }
            }
        },
        // Watcher 3: Track last added item
        'stockData.length': function(newVal, oldVal) {
            if (newVal > oldVal) {
                const latest = this.stockData[this.stockData.length - 1];
                this.lastAddedTitle = latest.judul;
                console.log(`Berhasil menambahkan: ${latest.judul}`);
            }
        }
    },
    methods: {
        resetFilters() {
            this.filter.upbjj = '';
            this.filter.kategori = '';
            this.filter.reorderOnly = false;
            this.sortKey = 'judul';
        },
        addNewData() {
            // Simple Validation
            if (!this.newForm.kode || !this.newForm.judul || !this.newForm.upbjj) {
                this.validationMsg = 'Harap isi semua field utama.';
                return;
            }

            const newItem = {
                ...this.newForm,
                id: Date.now(), // Unique ID
                harga: 40000 // Default price for dummy
            };

            this.stockData.push(newItem);
            
            // Reset form
            this.newForm = {
                kode: '', judul: '', upbjj: '', qty: null, safety: null,
                kategori: 'BMP', lokasiRak: 'NEW-01', catatanHTML: 'Data baru ditambahkan.'
            };
            this.validationMsg = 'Data berhasil ditambahkan!';
            setTimeout(() => this.validationMsg = '', 3000);
        },
        openEditModal(item) {
            this.editingItem = item;
            this.editForm = {
                qty: item.qty,
                safety: item.safety,
                catatanHTML: item.catatanHTML
            };
        },
        saveEdit() {
            if (this.editingItem) {
                this.editingItem.qty = this.editForm.qty;
                this.editingItem.safety = this.editForm.safety;
                this.editingItem.catatanHTML = this.editForm.catatanHTML;
                this.editingItem = null;
            }
        }
    }
});
