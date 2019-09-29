<template>
    <footer class="mt-10 flex flex-col p-6 lg:p-10 bg-black text-empire-gold-light">

        <div class="mt-6 text-center text-lg mb-1 lg:mb-4">
            <h4 class="tracking-wide">Empire Earth Soundboard
                <br>
                <a class="hover:text-empire-gold" href="https://sgbarker.com/">by Steve Barker</a>
            </h4>
        </div>

        <div class="mt-10 border-empire-gold-light border-b-2 pb-6 text-center">
            <h5 class="mb-8">
                Share:
            </h5>
            <div class="flex flex-wrap justify-between lg:justify-around">
                <div class="p-3 lg:p-2" v-on:click="socialLink('facebook')">
                    <svg class="cursor-pointer svg-button w-10 fill-current" version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 408.788 408.788" style="enable-background:new 0 0 408.788 408.788;"
                         xml:space="preserve">
<path d="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085
	h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882
	v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955
	l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087
	c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085
	C408.786,24.662,384.124,0,353.701,0z"/>
</svg>
                </div>

                <div class="p-3 lg:p-2" v-on:click="socialLink('twitter')">
                    <svg class="cursor-pointer svg-button w-10 fill-current" version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                         y="0px"
                         viewBox="0 0 410.155 410.155" style="enable-background:new 0 0 410.155 410.155;"
                         xml:space="preserve">
<path d="M403.632,74.18c-9.113,4.041-18.573,7.229-28.28,9.537c10.696-10.164,18.738-22.877,23.275-37.067
	l0,0c1.295-4.051-3.105-7.554-6.763-5.385l0,0c-13.504,8.01-28.05,14.019-43.235,17.862c-0.881,0.223-1.79,0.336-2.702,0.336
	c-2.766,0-5.455-1.027-7.57-2.891c-16.156-14.239-36.935-22.081-58.508-22.081c-9.335,0-18.76,1.455-28.014,4.325
	c-28.672,8.893-50.795,32.544-57.736,61.724c-2.604,10.945-3.309,21.9-2.097,32.56c0.139,1.225-0.44,2.08-0.797,2.481
	c-0.627,0.703-1.516,1.106-2.439,1.106c-0.103,0-0.209-0.005-0.314-0.015c-62.762-5.831-119.358-36.068-159.363-85.14l0,0
	c-2.04-2.503-5.952-2.196-7.578,0.593l0,0C13.677,65.565,9.537,80.937,9.537,96.579c0,23.972,9.631,46.563,26.36,63.032
	c-7.035-1.668-13.844-4.295-20.169-7.808l0,0c-3.06-1.7-6.825,0.485-6.868,3.985l0,0c-0.438,35.612,20.412,67.3,51.646,81.569
	c-0.629,0.015-1.258,0.022-1.888,0.022c-4.951,0-9.964-0.478-14.898-1.421l0,0c-3.446-0.658-6.341,2.611-5.271,5.952l0,0
	c10.138,31.651,37.39,54.981,70.002,60.278c-27.066,18.169-58.585,27.753-91.39,27.753l-10.227-0.006
	c-3.151,0-5.816,2.054-6.619,5.106c-0.791,3.006,0.666,6.177,3.353,7.74c36.966,21.513,79.131,32.883,121.955,32.883
	c37.485,0,72.549-7.439,104.219-22.109c29.033-13.449,54.689-32.674,76.255-57.141c20.09-22.792,35.8-49.103,46.692-78.201
	c10.383-27.737,15.871-57.333,15.871-85.589v-1.346c-0.001-4.537,2.051-8.806,5.631-11.712c13.585-11.03,25.415-24.014,35.16-38.591
	l0,0C411.924,77.126,407.866,72.302,403.632,74.18L403.632,74.18z"/>
</svg>
                </div>

                <div class="p-3 lg:p-2" v-on:click="socialLink('whatsapp')">
                    <svg class="cursor-pointer svg-button w-10 fill-current" version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                         y="0px"
                         viewBox="0 0 410.155 410.155" style="enable-background:new 0 0 410.155 410.155;"
                         xml:space="preserve">
                    <g>
	<path d="M198.929,0.242C88.5,5.5,1.356,97.466,1.691,208.02c0.102,33.672,8.231,65.454,22.571,93.536
		L2.245,408.429c-1.191,5.781,4.023,10.843,9.766,9.483l104.723-24.811c26.905,13.402,57.125,21.143,89.108,21.631
		c112.869,1.724,206.982-87.897,210.5-200.724C420.113,93.065,320.295-5.538,198.929,0.242z M323.886,322.197
		c-30.669,30.669-71.446,47.559-114.818,47.559c-25.396,0-49.71-5.698-72.269-16.935l-14.584-7.265l-64.206,15.212l13.515-65.607
		l-7.185-14.07c-11.711-22.935-17.649-47.736-17.649-73.713c0-43.373,16.89-84.149,47.559-114.819
		c30.395-30.395,71.837-47.56,114.822-47.56C252.443,45,293.218,61.89,323.887,92.558c30.669,30.669,47.559,71.445,47.56,114.817
		C371.446,250.361,354.281,291.803,323.886,322.197z"/>
                        <path d="M309.712,252.351l-40.169-11.534c-5.281-1.516-10.968-0.018-14.816,3.903l-9.823,10.008
		c-4.142,4.22-10.427,5.576-15.909,3.358c-19.002-7.69-58.974-43.23-69.182-61.007c-2.945-5.128-2.458-11.539,1.158-16.218
		l8.576-11.095c3.36-4.347,4.069-10.185,1.847-15.21l-16.9-38.223c-4.048-9.155-15.747-11.82-23.39-5.356
		c-11.211,9.482-24.513,23.891-26.13,39.854c-2.851,28.144,9.219,63.622,54.862,106.222c52.73,49.215,94.956,55.717,122.449,49.057
		c15.594-3.777,28.056-18.919,35.921-31.317C323.568,266.34,319.334,255.114,309.712,252.351z"/>
                        </g>
</svg>
                </div>

            </div>
        </div>
        <div class="mt-10 pb-6">
            <ul>

                <li class="p-3 lg:p-2">
                    <a class="hover:text-empire-gold" href="https://github.com/amaitu/Empire-Earth-SoundBoard">
                        Source code
                    </a>
                </li>

                <li class="p-3 lg:p-2">
                    <a class="hover:text-empire-gold" href="https://en.wikipedia.org/wiki/Empire_Earth_(video_game)">
                        Empire Earth
                    </a>
                </li>

                <li class="p-3 lg:p-2">
                    <a class="hover:text-empire-gold"
                       href="https://www.youtube.com/watch?v=347qmxgydkE&list=PLB489C5423FD3D057">
                        Empire Earth soundtrack
                    </a>
                </li>

                <li class="p-3 lg:p-2">
                    <a class="hover:text-empire-gold" href="mailto:ee@sgbarker.com">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'PartialFooter',

        methods: {
            socialLink: function (service) {
                const url = 'https://eesoundboard.online/';
                switch (service) {
                    case 'facebook':
                        window.location.href = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
                        break;
                    case 'twitter':
                        window.location.href = 'https://twitter.com/intent/tweet?text=' + url;
                        break;
                    case 'whatsapp':
                        window.location.href = 'whatsapp://send?text=' + url;
                        break;
                }
            },
        },
    };
</script>