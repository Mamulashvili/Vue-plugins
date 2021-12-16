import '../style/global.scss';

export default {
    install: (app, options) => {

        app.directive('font-size', (el, binding) => {
            binding.arg !== undefined && (el.style.fontWeight = binding.arg)
            el.style.fontSize = `${binding.value}px`;
        });

        app.directive('heading', (el, binding) => el.classList.add(binding.arg));

        app.directive('font-style', (el, binding) => el.style.fontStyle = binding.arg);

        app.directive('font-color', (el, binding) => el.style.color = binding.arg);

        app.directive('font-bg-color', (el, binding) => el.style.backgroundColor = binding.arg);


    }

}
