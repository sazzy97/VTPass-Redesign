// VTPASS WEBSITE INTERACTIVE JAVASCRIPT

// Data Structures for Services
const serviceProviders = {
  airtime: [
    { id: 'mtn', name: 'MTN Airtime', fee: 0 },
    { id: 'airtel', name: 'Airtel Airtime', fee: 0 },
    { id: 'glo', name: 'Glo Airtime', fee: 0 },
    { id: '9mobile', name: '9mobile Airtime', fee: 0 }
  ],
  data: [
    {
      id: 'mtn-data',
      name: 'MTN Data',
      packages: [
        { id: 'mtn-1.5', name: '1.5 GB Monthly - 30 Days', price: 1000 },
        { id: 'mtn-3', name: '3 GB Monthly - 30 Days', price: 1500 },
        { id: 'mtn-10', name: '10 GB Monthly - 30 Days', price: 3000 },
        { id: 'mtn-20', name: '20 GB Monthly - 30 Days', price: 5000 }
      ],
      fee: 0
    },
    {
      id: 'airtel-data',
      name: 'Airtel Data',
      packages: [
        { id: 'airtel-1.5', name: '1.5 GB Monthly - 30 Days', price: 1000 },
        { id: 'airtel-3', name: '3 GB Monthly - 30 Days', price: 1500 },
        { id: 'airtel-10', name: '10 GB Monthly - 30 Days', price: 3000 }
      ],
      fee: 0
    },
    {
      id: 'glo-data',
      name: 'Glo Data',
      packages: [
        { id: 'glo-2.3', name: '2.3 GB - 30 Days', price: 1000 },
        { id: 'glo-5.8', name: '5.8 GB - 30 Days', price: 2000 },
        { id: 'glo-10', name: '10 GB - 30 Days', price: 3000 }
      ],
      fee: 0
    },
    {
      id: 'smile',
      name: 'Smile Broadband',
      packages: [
        { id: 'smile-1.5', name: 'Smile Lite 1.5 GB', price: 1000 },
        { id: 'smile-5', name: 'Smile Value 5 GB', price: 2500 },
        { id: 'smile-10', name: 'Smile Unlimited Lite', price: 10000 }
      ],
      fee: 0
    }
  ],
  tv: [
    {
      id: 'dstv',
      name: 'DSTV Subscription',
      packages: [
        { id: 'dstv-padi', name: 'DSTV Padi Bundle', price: 2500 },
        { id: 'dstv-yanga', name: 'DSTV Yanga Bundle', price: 3500 },
        { id: 'dstv-confam', name: 'DSTV Confam Bundle', price: 6200 },
        { id: 'dstv-compact', name: 'DSTV Compact Plus', price: 14250 }
      ],
      fee: 100
    },
    {
      id: 'gotv',
      name: 'GOTV Subscription',
      packages: [
        { id: 'gotv-lite', name: 'GOTV Lite', price: 1100 },
        { id: 'gotv-jolli', name: 'GOTV Jolli', price: 3300 },
        { id: 'gotv-max', name: 'GOTV Max', price: 4850 }
      ],
      fee: 100
    },
    {
      id: 'startimes',
      name: 'StarTimes Subscription',
      packages: [
        { id: 'star-nova', name: 'Nova Bouquet', price: 1200 },
        { id: 'star-basic', name: 'Basic Bouquet', price: 2100 },
        { id: 'star-smart', name: 'Smart Bouquet', price: 3200 }
      ],
      fee: 100
    }
  ],
  electricity: [
    { id: 'ikeja', name: 'Ikeja Electricity Distribution (IKEDC)', fee: 100 },
    { id: 'eko', name: 'Eko Electricity Distribution (EKEDC)', fee: 100 },
    { id: 'abuja', name: 'Abuja Electricity Distribution (AEDC)', fee: 100 },
    { id: 'ibadan', name: 'Ibadan Electricity Distribution (IBEDC)', fee: 100 }
  ]
};

// Global State
let currentService = 'airtime';
let currentFee = 0;

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  // Navigation elements
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileClose = document.getElementById('mobileClose');
  const toolsDropdownBtn = document.getElementById('toolsDropdownBtn');
  const quickToolsMenu = document.getElementById('quickToolsMenu');
  
  // Modals
  const authModal = document.getElementById('authModal');
  const authClose = document.getElementById('authClose');
  const authTitle = document.getElementById('authTitle');
  const authSubtitle = document.getElementById('authSubtitle');
  const nameGroup = document.getElementById('nameGroup');
  const btnAuthSubmit = document.getElementById('btnAuthSubmit');
  const authToggleBtn = document.getElementById('authToggleBtn');
  const authToggleTextPrefix = document.getElementById('authToggleTextPrefix');
  
  const paymentModal = document.getElementById('paymentModal');
  const paymentSpinnerState = document.getElementById('paymentSpinnerState');
  const paymentSuccessState = document.getElementById('paymentSuccessState');
  const btnReceiptClose = document.getElementById('btnReceiptClose');
  
  const infoModal = document.getElementById('infoModal');
  const infoClose = document.getElementById('infoClose');
  
  // Buttons
  const btnLoginHeader = document.getElementById('btn-login-header');
  const btnRegisterHeader = document.getElementById('btn-register-header');
  const btnLoginMobile = document.getElementById('btn-login-mobile');
  const btnRegisterMobile = document.getElementById('btn-register-mobile');
  const btnContactUsFooter = document.getElementById('btnContactUsFooter');
  
  const heroGetStartedBtn = document.getElementById('heroGetStartedBtn');
  const discoverMoreServicesBtn = document.getElementById('discoverMoreServicesBtn');
  const agentStartBtn = document.getElementById('agentStartBtn');
  const agentLearnMoreBtn = document.getElementById('agentLearnMoreBtn');
  const apiDocsBtn = document.getElementById('apiDocsBtn');
  const whyDiscoverBtn = document.getElementById('whyDiscoverBtn');
  const whatsNewLink = document.getElementById('whatsNewLink');
  const btnVerifyMerchant = document.getElementById('btn-verify-merchant');
  
  // Calculator elements
  const calcTabs = document.querySelectorAll('.calc-tab');
  const providerSelect = document.getElementById('providerSelect');
  const packageSelect = document.getElementById('packageSelect');
  const packageGroup = document.getElementById('packageGroup');
  const inputLabel = document.getElementById('inputLabel');
  const numberInput = document.getElementById('numberInput');
  const amountInput = document.getElementById('amountInput');
  const amountGroup = document.getElementById('amountGroup');
  const summarySubtotal = document.getElementById('summarySubtotal');
  const summaryFee = document.getElementById('summaryFee');
  const summaryTotal = document.getElementById('summaryTotal');
  const btnSimulatePayment = document.getElementById('btnSimulatePayment');
  
  // Toast
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');

  // --- Sleek Dark Theme Logic ---
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const mobileThemeToggleBtn = document.getElementById('mobileThemeToggleBtn');

  // Check for saved theme preference, fallback to system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }

  function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    showToast(`${isDark ? 'Dark' : 'Light'} theme enabled!`, 'success');
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggleTheme);

  // --- Initialize Calculator ---
  updateCalculatorUI();

  // --- Toast Helper ---
  function showToast(message, type = 'info') {
    toastMessage.textContent = message;
    const icon = toast.querySelector('.toast-icon');
    if (type === 'success') {
      icon.className = 'fa-solid fa-circle-check toast-icon text-green';
    } else {
      icon.className = 'fa-solid fa-circle-info toast-icon';
    }
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 4000);
  }

  // Show welcome toast
  setTimeout(() => {
    showToast('Welcome to the premium VTpass Redesign experience!', 'success');
  }, 1000);

  // --- Mobile Nav Drawer ---
  menuToggle.addEventListener('click', () => mobileNav.classList.add('active'));
  mobileClose.addEventListener('click', () => mobileNav.classList.remove('active'));

  // --- Dropdown Toggle ---
  toolsDropdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    quickToolsMenu.classList.toggle('active');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!toolsDropdownBtn.contains(e.target) && !quickToolsMenu.contains(e.target)) {
      quickToolsMenu.classList.remove('active');
    }
  });

  // --- Auth Modal Sim ---
  let isRegisterMode = false;
  
  function openAuthModal(registerMode = false) {
    isRegisterMode = registerMode;
    mobileNav.classList.remove('active');
    if (isRegisterMode) {
      authTitle.textContent = 'Create a VTPass Account';
      authSubtitle.textContent = 'Join millions of smart payment users';
      nameGroup.style.display = 'flex';
      btnAuthSubmit.textContent = 'Register Now';
      authToggleTextPrefix.textContent = 'Already have an account?';
      authToggleBtn.textContent = 'Login';
    } else {
      authTitle.textContent = 'Login to VTPass';
      authSubtitle.textContent = 'Access your payment wallet and history';
      nameGroup.style.display = 'none';
      btnAuthSubmit.textContent = 'Sign In';
      authToggleTextPrefix.textContent = "Don't have an account?";
      authToggleBtn.textContent = 'Register';
    }
    authModal.classList.add('active');
  }

  btnLoginHeader.addEventListener('click', () => openAuthModal(false));
  btnRegisterHeader.addEventListener('click', () => openAuthModal(true));
  btnLoginMobile.addEventListener('click', () => openAuthModal(false));
  btnRegisterMobile.addEventListener('click', () => openAuthModal(true));
  
  authToggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openAuthModal(!isRegisterMode);
  });
  
  authClose.addEventListener('click', () => authModal.classList.remove('active'));
  
  btnAuthSubmit.addEventListener('click', () => {
    const email = document.getElementById('authEmail').value;
    if (!email) {
      showToast('Please fill in your email address.', 'info');
      return;
    }
    authModal.classList.remove('active');
    showToast(isRegisterMode ? 'Registration successful! Welcome aboard.' : 'Welcome back! Login successful.', 'success');
  });

  // --- Info Modals Events ---
  btnContactUsFooter.addEventListener('click', () => infoModal.classList.add('active'));
  infoClose.addEventListener('click', () => infoModal.classList.remove('active'));
  
  whatsNewLink.addEventListener('click', (e) => {
    e.preventDefault();
    showToast('See What\'s New: Multi-wallet feature and bulk airtime purchases are now live!', 'success');
  });

  btnVerifyMerchant.addEventListener('click', (e) => {
    e.preventDefault();
    quickToolsMenu.classList.remove('active');
    showToast('Merchant verification tool is running in sandbox mode.', 'info');
  });

  heroGetStartedBtn.addEventListener('click', () => openAuthModal(true));
  discoverMoreServicesBtn.addEventListener('click', () => {
    showToast('Additional services (Education, Insurance, Tolls) are available in our sandbox calculator below.', 'info');
    document.getElementById('calculator-section').scrollIntoView({ behavior: 'smooth' });
  });
  
  agentStartBtn.addEventListener('click', () => {
    showToast('Loading Agent Registration portal...', 'success');
    openAuthModal(true);
  });
  
  agentLearnMoreBtn.addEventListener('click', () => {
    infoModal.classList.add('active');
  });
  
  apiDocsBtn.addEventListener('click', () => {
    showToast('Redirecting to Merchant API Docs...', 'success');
    setTimeout(() => {
      window.open('https://www.vtpass.com/documentation', '_blank');
    }, 1000);
  });
  
  whyDiscoverBtn.addEventListener('click', () => {
    document.getElementById('calculator-section').scrollIntoView({ behavior: 'smooth' });
  });

  // Close modals when clicking overlay
  const modals = [authModal, paymentModal, infoModal];
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  // --- Calculator Interactions ---
  calcTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      calcTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentService = tab.getAttribute('data-service');
      updateCalculatorUI();
    });
  });

  function updateCalculatorUI() {
    // Clear Selectors
    providerSelect.innerHTML = '';
    packageSelect.innerHTML = '';
    
    const providers = serviceProviders[currentService];
    
    // Set Input labels depending on service type
    if (currentService === 'airtime') {
      inputLabel.textContent = 'Phone Number';
      numberInput.placeholder = 'Enter 11-digit mobile number';
      packageGroup.classList.add('d-none');
      amountGroup.classList.remove('d-none');
      amountInput.removeAttribute('disabled');
      amountInput.value = '';
      currentFee = 0;
      
      providers.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = p.name;
        providerSelect.appendChild(opt);
      });
    } 
    else if (currentService === 'data') {
      inputLabel.textContent = 'Phone Number';
      numberInput.placeholder = 'Enter 11-digit mobile number';
      packageGroup.classList.remove('d-none');
      amountGroup.classList.remove('d-none');
      amountInput.setAttribute('disabled', 'true');
      currentFee = 0;
      
      providers.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = p.name;
        providerSelect.appendChild(opt);
      });
      
      updatePackages();
    } 
    else if (currentService === 'tv') {
      inputLabel.textContent = 'Smartcard Number';
      numberInput.placeholder = 'Enter smartcard / UIC number';
      packageGroup.classList.remove('d-none');
      amountGroup.classList.remove('d-none');
      amountInput.setAttribute('disabled', 'true');
      currentFee = 100;
      
      providers.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = p.name;
        providerSelect.appendChild(opt);
      });
      
      updatePackages();
    } 
    else if (currentService === 'electricity') {
      inputLabel.textContent = 'Meter Number';
      numberInput.placeholder = 'Enter prepaid or postpaid meter number';
      packageGroup.classList.add('d-none');
      amountGroup.classList.remove('d-none');
      amountInput.removeAttribute('disabled');
      amountInput.value = '';
      currentFee = 100;
      
      providers.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = p.name;
        providerSelect.appendChild(opt);
      });
    }

    updateSummary();
  }

  // Package Change Event for Data and TV
  function updatePackages() {
    packageSelect.innerHTML = '';
    const selectedProviderId = providerSelect.value;
    const providers = serviceProviders[currentService];
    const provider = providers.find(p => p.id === selectedProviderId);
    
    if (provider && provider.packages) {
      provider.packages.forEach(pkg => {
        const opt = document.createElement('option');
        opt.value = pkg.id;
        opt.setAttribute('data-price', pkg.price);
        opt.textContent = `${pkg.name} - ₦${pkg.price.toLocaleString()}`;
        packageSelect.appendChild(opt);
      });
      
      // Auto-set the price of the first package in amount field
      if (provider.packages.length > 0) {
        amountInput.value = provider.packages[0].price;
      }
    }
    updateSummary();
  }

  providerSelect.addEventListener('change', () => {
    if (currentService === 'data' || currentService === 'tv') {
      updatePackages();
    } else {
      updateSummary();
    }
  });

  packageSelect.addEventListener('change', () => {
    const selectedOpt = packageSelect.options[packageSelect.selectedIndex];
    if (selectedOpt) {
      amountInput.value = selectedOpt.getAttribute('data-price');
    }
    updateSummary();
  });

  amountInput.addEventListener('input', updateSummary);

  function updateSummary() {
    const amt = parseFloat(amountInput.value) || 0;
    summarySubtotal.innerHTML = `&#8358;${amt.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    summaryFee.innerHTML = `&#8358;${currentFee.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    
    const total = amt > 0 ? (amt + currentFee) : 0;
    summaryTotal.innerHTML = `&#8358;${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  }

  // --- Simulate Payment Success ---
  btnSimulatePayment.addEventListener('click', () => {
    const number = numberInput.value.trim();
    const amount = parseFloat(amountInput.value) || 0;
    const providerName = providerSelect.options[providerSelect.selectedIndex]?.text || '';
    
    // Basic Form Validations
    if (!number) {
      showToast(`Please enter a valid ${inputLabel.textContent.toLowerCase()}`, 'info');
      numberInput.focus();
      return;
    }
    if (number.length < 9) {
      showToast(`The ${inputLabel.textContent.toLowerCase()} must be valid.`, 'info');
      numberInput.focus();
      return;
    }
    if (amount <= 0) {
      showToast('Please specify a valid amount greater than zero.', 'info');
      amountInput.focus();
      return;
    }

    // Launch Simulation Modal
    paymentSpinnerState.classList.remove('d-none');
    paymentSuccessState.classList.add('d-none');
    paymentModal.classList.add('active');

    // Wait 2.5 seconds, then show receipt success state
    setTimeout(() => {
      paymentSpinnerState.classList.add('d-none');
      paymentSuccessState.classList.remove('d-none');
      
      // Inject Receipt details
      document.getElementById('recService').textContent = currentService.toUpperCase();
      document.getElementById('recProvider').textContent = providerName;
      document.getElementById('recTarget').textContent = number;
      
      const reference = 'VT-' + Math.floor(100000000 + Math.random() * 900000000) + '-X';
      document.getElementById('recRef').textContent = reference;
      
      const totalAmount = amount + currentFee;
      document.getElementById('recTotal').innerHTML = `&#8358;${totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
      
      showToast('Value delivered successfully!', 'success');
    }, 2500);
  });

  btnReceiptClose.addEventListener('click', () => {
    paymentModal.classList.remove('active');
    // Reset Form inputs
    numberInput.value = '';
    if (currentService === 'airtime' || currentService === 'electricity') {
      amountInput.value = '';
    }
    updateSummary();
  });
});
