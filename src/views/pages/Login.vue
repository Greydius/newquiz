<template>
  <div class="login">
    <Card
      title="Вход"
      class="login__card card"
    >
      <a slot="extra" @click="resetForm">Сброс</a>
      <FormModel
        ref="form"
        :model="form"
        :rules="rules"
        layout="vertical"
        class="form"
      >
        <FormModelItem
          label="Email"
          prop="email"
        >
          <Input
            v-model="form.email"
            placeholder="Введите e-mail..."
          />
        </FormModelItem>
        <FormModelItem
          label="Пароль"
          prop="password"
        >
          <Input
            v-model="form.password"
            type="password"
            placeholder="Введите пароль..."
          />
        </FormModelItem>
      </FormModel>
      <template slot="actions" class="card__actions">
        <Button @click="handleSubmit">
          <a-icon key="setting" type="login" />
          Вход
        </Button>
      </template>
    </Card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import {
  Card, FormModel, Input, Button,
} from 'ant-design-vue';

const { mapActions: mapAuthActions } = createNamespacedHelpers('auth');

export default {
  components: {
    Card, FormModel, FormModelItem: FormModel.Item, Input, Button,
  },
  data() {
    return {
      form: {
        email: undefined,
        password: undefined,
      },
      rules: {
        email: [
          {
            required: true,
            message: 'Обязательное поле',
          },
        ],
        password: [
          {
            required: true,
            message: 'Обязательное поле',
          },
        ],
      },
    };
  },
  methods: {
    ...mapAuthActions({
      login: 'login',
      // testLogin: 'testLogin'
    }),
    handleSubmit(e) {
      e.preventDefault();
      this.$refs.form.validate((valid) => {
        if (!valid) {
          console.log('error');
          return true;
        }
        this.login(this.form)
        // this.testLogin(this.form)
          .then(() => {
            this.$router.push({ name: 'home' });
          })
          .catch(() => {
            this.form.password = '';
            this.$message.error('Не правильные данные для входа');
          });
        return true;
      });
    },
    resetForm() {
      this.$refs.form.resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  &__card {
    max-width: 500px;
    width: 100%;
  }
}
</style>
