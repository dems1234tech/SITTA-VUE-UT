new Vue({
    el: '#app',
    data: {
        paketList: [],
        trackingHistory: [],
        selectedPackageId: '',
        form: {
            nim: '',
            nama: '',
            ekspedisi: '',
            tanggalKirim: new Date().toISOString().substr(0, 10) // Default to today
        },
        sequence: 1
    },
    mounted() {
        // Load data from global window variables
        this.paketList = window.paket;
        
        // Load sequence from localStorage if available
        const savedSeq = localStorage.getItem('sitta_seq');
        if (savedSeq) this.sequence = parseInt(savedSeq);

        // Load history from localStorage
        const savedHistory = localStorage.getItem('sitta_tracking');
        if (savedHistory) this.trackingHistory = JSON.parse(savedHistory);
    },
    computed: {
        // Auto-generate DO Number
        nextDONumber() {
            const year = new Date().getFullYear();
            const seqStr = String(this.sequence).padStart(3, '0');
            return `DO${year}-${seqStr}`;
        },
        // Get selected package object
        selectedPackage() {
            return this.paketList.find(p => p.kodePaket === this.selectedPackageId) || null;
        },
        // Total price formatted for display
        totalPriceFormatted() {
            if (!this.selectedPackage) return 'Rp 0';
            return this.formatCurrency(this.selectedPackage.harga);
        }
    },
    watch: {
        // Watcher 1: Monitor package selection
        selectedPackageId(newVal) {
            if (newVal) {
                console.log(`User selected package: ${newVal}`);
            }
        },
        // Watcher 2: Monitor history length for UI feedback
        'trackingHistory.length': function(newVal, oldVal) {
            if (newVal > oldVal) {
                console.log('Successfully added new tracking record.');
            }
        },
        // Watcher 3: Persist sequence
        sequence(newVal) {
            localStorage.setItem('sitta_seq', newVal);
        }
    },
    methods: {
        formatCurrency(value) {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
            }).format(value);
        },
        submitDO() {
            if (!this.selectedPackage) return;

            const newDO = {
                noDO: this.nextDONumber,
                nim: this.form.nim,
                nama: this.form.nama,
                ekspedisi: this.form.ekspedisi,
                paketNama: this.selectedPackage.namaPaket,
                tanggalKirim: this.form.tanggalKirim,
                total: this.selectedPackage.harga
            };

            // Add to history (at the beginning)
            this.trackingHistory.unshift(newDO);
            
            // Increment sequence
            this.sequence++;

            // Save history
            localStorage.setItem('sitta_tracking', JSON.stringify(this.trackingHistory));

            // Reset form
            this.form.nim = '';
            this.form.nama = '';
            this.form.ekspedisi = '';
            this.selectedPackageId = '';
            
            alert(`Delivery Order ${newDO.noDO} berhasil dibuat!`);
        }
    }
});
