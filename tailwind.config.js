/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans'],
                roboto: ['Roboto', 'sans-serif'],
                serif: ['DM Serif Display', 'serif']
            },
            screens: {
                ss: '280px',
                xs: '428px',
                '3xl': '1920px',
                '4xl': '2560px'
            },
            spacing: {
                4.2: '1.05rem',
                4.3: '1.075rem',
                4.5: '1.125rem',
                5.25: '1.3125rem',
                5.5: '1.375rem',
                5.75: '1.4375rem',
                6.25: '1.5625rem',
                6.5: '1.625rem',
                6.75: '1.6875rem',
                7.25: '1.8125rem',
                7.5: '1.875rem',
                9.25: '2.3125rem',
                9.5: '2.375rem',
                9.7: '2.438rem',
                9.75: '2.4375rem',
                10.5: '2.625rem',
                10.75: '2.6875rem',
                11.25: '2.8125rem',
                11.75: '2.9375rem',
                12.25: '3.0625rem',
                12.5: '3.125rem',
                12.75: '3.1875rem',
                13: '3.25rem',
                15: '3.75rem',
                16.25: '4.0625rem',
                17.5: '4.375rem',
                17.75: '4.4375rem',
                18: '4.5rem',
                19.25: '4.8125rem',
                20.5: '5.125rem',
                21: '5.25rem',
                21.5: '5.375rem',
                22: '5.5rem',
                22.5: '5.625rem',
                23: '5.75rem',
                25: '6.25rem',
                25.25: '6.3125rem',
                26: '6.5rem',
                27.5: '6.875rem',
                28.75: '7.1875rem',
                30: '7.5rem',
                30.25: '7.5625rem',
                31.25: '7.8125rem',
                32.25: '8.0625rem',
                36.5: '9.125rem',
                37: '9.25rem',
                37.25: '9.3125rem',
                39: '9.75rem',
                40.5: '10.125rem',
                41: '10.25rem',
                43: '10.75rem',
                43.25: '10.8125rem',
                45: '11.25rem',
                45.5: '11.375rem',
                49: '12.25rem',
                51.5: '12.875rem',
                54: '13.5rem',
                55: '13.75rem',
                58: '14.5rem',
                58.25: '14.5625rem',
                59: '14.75rem',
                59.25: '14.8125rem',
                63: '15.75rem',
                68: '17rem',
                73.75: '18.4375rem',
                74.5: '18.625rem',
                75: '18.75rem',
                76: '19rem',
                79.5: '19.875rem',
                83.25: '20.8125rem',
                84.25: '21.0625rem',
                87.5: '21.875rem',
                88.75: '22.25rem',
                89: '22.25rem',
                89.2: '22.313rem',
                89.75: '22.4375rem',
                93.7: '23.438rem',
                94: '23.5rem',
                94.25: '23.5625rem',
                94.75: '23.6875rem',
                98.2: '24.563rem',
                100: '25rem',
                101.5: '25.375rem',
                102.5: '25.625rem',
                104.25: '26.0625rem',
                104.5: '26.125rem',
                106.7: '26.688rem',
                107: '26.75rem',
                110: '27.5rem',
                112.5: '28.125rem',
                116.25: '29.0625rem',
                116.5: '29.125rem',
                126.75: '31.6875rem',
                127: '31.75rem',
                130.25: '32.5625rem',
                131: '32.75rem',
                137: '34.25rem',
                142.4: '35.625rem',
                143: '35.75rem',
                144.25: '36.0625rem',
                144.5: '36.125rem',
                159.5: '39.875rem',
                159.75: '39.9375rem',
                162.5: '40.625rem',
                173.25: '43.3125rem',
                175: '43.75rem',
                177.5: '44.375rem',
                192.5: '48.125rem',
                192.75: '48.1875rem',
                210: '52.5rem',
                230.25: '57.5625rem',
                250: '62.5rem',
                270: '67.5rem',
                287.5: '71.875rem',
                330: '82.5rem',
                344.5: '86.125rem',
                389: '97.25rem'
            },
            colors: {
                gray: {
                    75: '#F7F7F7',
                    425: '#828796',
                    475: '#7B7B7B',
                    525: '#707070'
                },
                slate: {
                    550: '#696969',
                    725: '#2F3750',
                    925: '#0B1226'
                },
                zinc: {
                    75: '#F4F8FF',
                    850: '#272727'
                },
                blue: {
                    575: '#0A66EC',
                    850: '#253F9C'
                },
                neutral: {
                    575: '#555555'
                }
            },
            fontSize: {
                '2.5xl': '1.6875rem',
                '4.5xl': '2.5rem',
                '4.7xl': '2.75rem',
                '5.5xl': '3.25rem',
                '5.7xl': '3.5rem',
                '7.5xl': '5rem',
                '7.7xl': '5.3125rem'
            },
            lineHeight: {
                5.25: '1.3125rem',
                5.5: '1.375rem',
                5.75: '1.4375rem',
                7.25: '1.8125rem',
                7.5: '1.875rem',
                8.5: '2.125rem',
                9.5: '2.375rem',
                10.5: '2.625rem',
                10.75: '2.6875rem',
                11: '2.75rem',
                11.25: '2.8125rem',
                12: '3rem',
                13: '3.25rem',
                14: '3.5rem',
                15: '3.75rem',
                15.25: '3.8125rem',
                16: '4rem',
                16.75: '4.1875rem',
                17: '4.25rem',
                17.5: '4.375rem',
                18: '4.5rem',
                20: '5rem',
                23: '5.8125rem',
                24: '6rem'
            },
            borderRadius: {
                40: '2.5rem',
                8: '2rem'
            },
            opacity: {
                6: '0.06'
            }
        }
    },
    plugins: []
};
