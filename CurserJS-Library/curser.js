(function(global, jq) {
    "use strict"
    
    // 'new' an object
    var Curser = function(firstName, lastName, lang) {
        return new Curser.init(firstName, lastName, lang)
    }

    // Hidden within the scope of the IIFE and never directly accessible
    var supportedLangs = ['en', 'es']


    // Informal curses
    var curses = {
        en: 'Fuck you',
        es: 'Que te jodan'
    }

    // Formal curses
    var formalCurses = {
        en: 'Damn you',
        es: 'Maldito seas'
    }


    // Logger message
    var logMessages = {
        en: 'Logged In',
        es: 'Incio session'
    }

    // Protoype holds methods (to save memory space)
    Curser.prototype = {

        // 'this' refers to the calling object at execution time
        fullName: function() {
            return this.firstName + ' ' + this.lastName
        },

        validate: function() {
            // check that is a valid language
            // references the externally inaccessible 'supportedLangs' within the closure
            if (supportedLangs.indexOf(this.lang) === -1) {
                throw "Invalid language"
            }
        },

        // retrieve messages from object by referring to properties using [] syntax
        cursing: function() {
            return curses[this.lang] + ' ' + this.firstName + '!'
        },

        formalCursing: function() {
            return formalCurses[this.lang] + ', ' + this.fullName()
        },

        // chainable methods return their own containing object
        curse: function(formal) {

            var msg 

            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalCursing()
            }
            else {
                msg = this.cursing()
            }
            if (console) {
                console.log(msg)
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this
        },

        log: function() {

            if (console) {
                console.log(logMessages[this.lang] + ': ' + this.fullName())
            }

            // make chainable
            return this
        },

        setLang: function(lang) {

            // set the language            
            this.lang = lang

            // validate            
            this.validate()

            // make chainable
            return this
        },

        HTMLCursing: function(selector, formal) {

            if (!$) {
                throw 'jQuery not loaded'
            }
            else if (!selector) {
                throw 'Missing jQuery selector'
            }

            // determine the message
            var msg
            if (formal) {
                msg = this.formalCursing()
            }
            else {
                msg = this.cursing()
            }

            // inject the message in the chosen place in the DOM
            $(selector).html(msg)

            // make chainable
            return this
        }

    }

    // the actual object is created here, allowing us to 'new' an object without calling 'new'    
    Curser.init = function( firstName, lastName, lang) {

        var self = this

        self.firstName = firstName || '' 
        self.lastName =  lastName || ''
        self.lang = lang || 'en'

        self.validate
    }

    // trick borrowed from jQuery so we don't have to use the 'new' keyword    
    Curser.init.prototype = Curser.prototype


    // attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers    
    global.Curser = global.C$ = Curser
   

}(window, jQuery))
