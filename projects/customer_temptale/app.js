Vue.directive('phone', {
  bind(el) {  
    el.oninput = function(e) {
      if (!e.isTrusted) {
        return;
      }

      const x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
      el.dispatchEvent(new Event('input'));
    }
  },
});

const app = new Vue({
    el: '#app',
    data: {
      errors: [],
      first_name: null,
      last_name: null,
      patronymic: null,
      birthday_date: null,
      picked: null,
      phone: null,
      castomer_type: null,
      therapist: null,
      outgoing_sms_bool: false,
      region: '',
      regions: [
        "Челябинская область",
        "Свердловская область",
        "Республика Адыгея",
      ],
      city: '',
      dateOfIssue: ''
    },
    methods: {
      checkForm: function (e) {
        if (this.name && this.age) {
          return true;
        }
  
        this.errors = [];
  
        if (!this.first_name) {
          this.errors.push('Требуется указать имя.');
        }
        if (!this.last_name) {
          this.errors.push('Требуется указать фамилию.');
        }
        if (!this.birthday_date) {
          this.errors.push('Требуется указать дату рождения.');
        }
        if (!this.phone) {
          this.errors.push('Требуется указать номер телефона.');
        }
        if (!this.castomer_type) {
          this.errors.push('Требуется указать группу клиента.');
        }
        if (!this.city) {
          this.errors.push('Требуется указать город.');
        }
        if (!this.dateOfIssue) {
          this.errors.push('Введите дату выдачи.');
        }
  
        e.preventDefault();
      },
      validDocumentSeries: function (documentSeries) {
        var re = /[0-9]{4}/;
        return re.test(documentSeries);
      }
    }
  })

  