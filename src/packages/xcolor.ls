'use strict'


export class XColor

    args = @args = {}


    # color data structure:

    # color-name: {
    #     rgb: { r: , g: , b: },
    #     hsb: { },
    #     cmyk: {},
    #     gray:
    # }


    colors = @colors = new Map([
        * "red"             {}
        * "green"           {}
        * "blue"            {}
        * "cyan"            {}
        * "magenta"         {}
        * "yellow"          {}
        * "black"           {}
        * "gray"            {}
        * "white"           {}
        * "darkgray"        {}
        * "lightgray"       {}
        * "brown"           {}
        * "lime"            {}
        * "olive"           {}
        * "orange"          {}
        * "pink"            {}
        * "purple"          {}
        * "teal"            {}
        * "violet"          {}
    ])


    # CTOR
    (generator, options) ->
        @g = generator
        @options = options if options

        for opt in @options
            opt = Object.keys(opt).0

            # xcolor, 2.1.2

            switch opt
            # target color mode
            | "natural" =>
            | "rgb" =>
            | "cmy" =>
            | "cmyk" =>
            | "hsb" =>
            | "gray" =>
            | "RGB" =>
            | "HTML" =>
            | "HSB" =>
            | "Gray" =>
            | "monochrome" =>

            # predefined colors
            | "dvipsnames" =>
            | "dvipsnames*" =>
            | "svgnames" =>
            | "svgnames*" =>
            | "x11names" =>
            | "x11names*" =>

            | otherwise =>



    # defining colors


    # \definecolorset[type]{model-list}{head}{tail}{set spec}
    args.\definecolorset = <[ P i? c-ml ie ie c-ssp ]>
    \definecolorset      : (type, models, hd, tl, setspec) !->
        @g.error "unknown color type" if type not in [null, "named" "ps"]

        hd = "" if not hd
        tl = "" if not tl

        # TODO: deal with models.core
        for spec in setspec
            @definecolor type, hd + spec.name + tl, models, spec.speclist

    # \definecolor[type]{name}{model-list}{color spec list}
    args.\definecolor = <[ P i? i c-ml c-spl ]>
    \definecolor      : (type, name, models, colorspec) !->
        @g.error "unknown color type" if type not in [null, "named" "ps"]
        @g.error "color models and specs don't match" if models.models.length != colorspec.length

        color = {}

        for model, i in models.models
            color[model] = colorspec[i]

        colors.set name, color

        # console.log(name, JSON.stringify(colors.get name))


    # using colors

    # {name} or [model]{color specification}
    args.\color =       <[ HV i? c ]>

    # {name}{text} or [model]{color specification}{text}
    args.\textcolor =   <[ H i? c g ]>
    \textcolor      : (model, color, text) ->



    args.\colorbox =    <[ H i? c g ]>
    args.\fcolorbox =   <[ H i? c c g ]>
