document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('regForm');
  const message = document.getElementById('message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Use built-in validation first
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = {
      name: form.name.value.trim(),
      fatherName: form.fatherName.value.trim(),
      motherName: form.motherName.value.trim(),
      phone: form.phone.value.trim(),
      address: form.address.value.trim()
    };

    // Extra phone validation (10-15 digits, optional leading +)
    const phonePattern = /^\+?\d{10,15}$/;
    if (!phonePattern.test(data.phone)) {
      message.textContent = 'Please enter a valid phone number (10–15 digits, optional +).';
      message.className = 'message error';
      return;
    }

    // Show success with submitted data
    message.innerHTML = `<strong>Registration successful ✅</strong>
      <div class="summary">
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Father's Name:</strong> ${escapeHtml(data.fatherName)}</p>
        <p><strong>Mother's Name:</strong> ${escapeHtml(data.motherName)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
        <p><strong>Address:</strong> ${escapeHtml(data.address)}</p>
      </div>`;
    message.className = 'message success';

    // Optional: save to localStorage
    try { localStorage.setItem('lastRegistration', JSON.stringify(data)); } catch (err) { /* ignore */ }

    form.reset();
  });

  // Simple HTML-escape helper to avoid injection when showing values
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
});