<template>
    <core-settings>
        <template v-slot:default="{ multiLanguage, multiTheme, meta }">
            <vue-aside class="settings">
                <p class="menu-label is-bold has-text-centered">
                    {{ i18n("Settings") }}
                </p>
                <ul class="menu-list">
                    <li v-if="multiLanguage"
                        class="settings-item">
                        <language-selector/>
                    </li>
                    <li v-if="multiTheme"
                        class="settings-item">
                        <theme-selector/>
                    </li>
                    <li class="settings-item">
                        <toastr-position/>
                    </li>
                    <li class="settings-item has-margin-bottom-small">
                        <sidebar-state/>
                    </li>
                    <li class="settings-item">
                        <menu-organizer v-if="canAccess('system.menus.organize')"/>
                    </li>
                    <li class="settings-item has-margin-bottom-small">
                        <bookmarks-state/>
                    </li>
                    <li v-if="canAccess('system.tutorials.load')"
                        class="settings-item">
                        <tutorial/>
                    </li>
                    <li class="settings-item">
                        <key-collector v-if="meta.env === 'local'"/>
                    </li>
                </ul>
            </vue-aside>
        </template>
    </core-settings>
</template>

<script>
import CoreSettings from '../../../core/components/settings/Settings.vue';
import VueAside from '../VueAside.vue';
import LanguageSelector from './LanguageSelector.vue';
import ThemeSelector from './ThemeSelector.vue';
import ToastrPosition from './ToastrPosition.vue';
import SidebarState from './SidebarState.vue';
import BookmarksState from './BookmarksState.vue';
import Tutorial from './Tutorial.vue';
import KeyCollector from './KeyCollector.vue';
import MenuOrganizer from './MenuOrganizer.vue';

export default {
    name: 'Settings',

    inject: ['canAccess', 'i18n'],

    components: {
        CoreSettings,
        VueAside,
        LanguageSelector,
        ThemeSelector,
        ToastrPosition,
        SidebarState,
        BookmarksState,
        Tutorial,
        KeyCollector,
        MenuOrganizer,
    },
};

</script>

<style lang="scss">

    .settings {
        overflow-y: auto;
        [dir='ltr'] & {
            right: 0;
        }
        [dir='rtl'] & {
            left: 0;
        }

        .settings-item {
            padding: 6px;
            .level-item {
                [dir='ltr'] & {
                    margin-right: unset;
                }
                [dir='rtl'] & {
                    margin-left: unset;
                }
            }
        }
    }

</style>
