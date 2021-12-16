import BaseAlert from '@/components/plugin/BaseAlert';

export default {
    install: app => {
        app.component('base-alert', BaseAlert);
    }
}