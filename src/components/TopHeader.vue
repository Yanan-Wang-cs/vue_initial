<template>
  <el-affix :offset="0">
    <nav>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item index="0">
          <img
            src="@/assets/image/icon/logo-black.png"
            alt="logo"
            class="h-14"
          />
        </el-menu-item>
        <div class="flex-grow" />
        <div v-for="(topMenu, topIndex) in headerMenu" :key="`top${topIndex}`">
          <el-menu-item :index="`${topIndex + 1}`" v-if="topMenu.path">
            <router-link :to="topMenu.path">{{ topMenu.menuName }}</router-link>
          </el-menu-item>
          <el-sub-menu :index="`${topIndex + 1}`" v-else>
            <template #title>{{ topMenu.menuName }}</template>
            <div
              v-for="(secMenu, secIndex) in topMenu.submenu"
              :key="`sec${secIndex}`"
            >
              <el-menu-item
                :index="`${topIndex + 1}-${secIndex + 1}`"
                v-if="secMenu.path"
              >
                <router-link :to="secMenu.path"
                  >{{ secMenu.menuName }} {{ secMenu.path }}</router-link
                >
              </el-menu-item>
              <el-sub-menu :index="`${topIndex + 1}-${secIndex + 1}`" v-else>
                <template #title>{{ secMenu.menuName }}</template>
                <div
                  v-for="(thMenu, thIndex) in secMenu.submenu"
                  :key="`th${thIndex}`"
                >
                  <el-menu-item :index="`${topIndex}-${secIndex}-${thIndex}`">
                    <router-link :to="thMenu.path" v-if="thMenu.path">{{
                      thMenu.menuName
                    }}</router-link>
                  </el-menu-item>
                </div>
              </el-sub-menu>
            </div>
          </el-sub-menu>
        </div>

        <el-button
          v-for="button in buttons"
          :key="button.text"
          :type="button.type"
          link
          :disabled="button.text.toLowerCase() === currentLanguage"
          @click="setLanguage(button.text.toLowerCase())"
          >{{ button.text }}</el-button
        >
      </el-menu>
    </nav>
  </el-affix>
</template>

<script lang="ts">
// import { computed, ref } from "vue";
import { defineComponent, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "TopHeader",
  setup() {
    const activeIndex = ref("1");
    const { locale } = useI18n();
    const headerMenu = reactive([
      {
        path: "/",
        menuName: "Home",
      },
      {
        menuName: "Others",
        submenu: [
          {
            path: "/about",
            menuName: "About",
          },
          {
            path: "/about",
            menuName: "About",
          },
          {
            menuName: "Example",
            submenu: [
              {
                path: "/about",
                menuName: "About",
              },
              {
                path: "/about",
                menuName: "About",
              },
            ],
          },
        ],
      },
    ]);
    const buttons = [
      { type: "primary", text: "EN" },
      { type: "primary", text: "ZH" },
    ];
    let currentLanguage = ref(locale.value);

    function setLanguage(lang: string) {
      currentLanguage.value = lang;
      locale.value = lang;
      console.log(currentLanguage, locale.value);
    }

    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    return {
      setLanguage,
      handleSelect,
      activeIndex,
      headerMenu,
      buttons,
      currentLanguage,
    };
  },
});
</script>
