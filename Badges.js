// This is a JavaScript Adobe InDesign script that automates creation of conference badges
// It’s all explained here: https://medium.com/p/db6fa0925c5b/
// -------------------------
// Marcin Wichary, 2017-2018

// Note: This assumes InDesign units being POINTS. 
// I am not sure if this will work correctly if it’s not.

// Constants
// ---------

// "false" for the final run, but you can use "true" for testing
var CURRENT_PAGE_ONLY = false

// A list of supported characters in the font we’re using
// This will need to be updated if the font changes

var SUPPORTED_CHARS = 'AÁĂẮẶẰẲẴǍÂẤẬẦẨẪȀÄǞȦẠǠÀẢȂĀĄÅǺḀȺÃÆǼǢBḂḄƁḆɃƂCĆČÇḈĈĊƇȻDǱǄÐĎḐḒĐḊḌƊḎƉƋǲǅEÉĔĚȨḜÊẾḘỆỀỂỄȄËĖẸÈẺȆĒḖḔĘƐƎƩɆẼḚƷǮƸFḞƑGǴƔĞǦĜĢĠƓɁḠǤȜHⱵĦḪȞḨĤⱧḦḢḤǶIĲÍĬǏÎȈÏḮİỊÌỈȊĪĮƖƗĨḬJĴɈKḰǨĶⱩḲƘḴLǇĹȽĽḼĻĿḶḸⱠǈḺⱢŁMḾṀṂƜNǊŃŇṊŅṄṆǸŊƝǋṈȠÑOȢÓŎǑƟÔỐỘỒỔỖȌÖȪȮȰỌÒỎƠỚỢỜỞỠŐƢȎŌṒṐǪǬƆØǾÕṌṎȬŒPṔṖƤÞⱣQɊRŔŘŖȐṘṚṜȒṞɌⱤSŚṤŠṦŞŜȘṠṢṨẞƏTŦŤŢṰȚȾṪṬƬṮƼƄƧƮUÚɄŬǓÛṶȔÜǗṲǙǛǕỤÙỦƯỨỰỪỬỮŰȖŪṺŲƱŮŨṸṴVṾƲṼɅWẂŴẄẆẈẀǷXẌẊYÝŶŸẎỴỲƳỶȲƦɎỸZŹŽẐⱫŻẒȤẔƵᴁᴀᴃʙᴄᴅᴇᴆᴣɢʛʜɪᴊᴋʟᴌᴍᴎɴɶᴕᴐᴏᴘᴙʀʁᴛᴚᴜᴠᴡʏᴢaáăắặằẳẵǎâấậầẩẫȁäǟȧạǡᴂàảᴥȃɑᶐɒāąᶏẚåǻḁⱥãɐæǽǣbḃḅɓʭʘʬḇᵬᶀƀƃcćčçḉĉɕċƈↄʗȼdðȸďḑḓđȡḋḍƍʤɗᶑḏᵭᶁɖƌǳʣǆʥeᴈéĕěȩḝêếḙệềểễȅëėẹèẻȇēḗḕęɛʚᶓɜɞɝᶔᶒɘʃʆᶋᶘƪʅɇẽḛǝəɚʒǯʓᶚƹƺfḟʩᵮᶂgǵɣğǧĝģġɠᵹƾʔʖʕɂʡʢḡᶃɡǥᵷȝhⱶħḫȟḩĥⱨḧḣḥɧɦẖɥʮʯƕiᴉıíĭǐîȉïḯịᵻìỉȋĳīįɩᵼᶖɨĩḭjȷǰĵʝɟʄɉkḱǩķⱪḳĸƙḵᶄʞlĺƛƚɬľḽļȴŀḷḹⱡɮɭǉḻɫẛᶅʪłʫmᴟḿṁṃɱɰᵯᶆɯnńŉňṋņȵṅṇǹŋɲɳǌƞṉᵰᶇñoᴗᴑᴒᴖóɵŏǒôốộồổỗȍöȫȯȱọᴔòỏơớợờởỡőƣȏōṓṑɷǫǭɔᶗøᴓǿõṍṏȭȣœpṕṗɸƥþᵱᶈᵽqʠɋȹrŕɤřŗȑṙṛṝɾᵳɿɻȓṟɼɺᵲᶉɍɽɹsśṥšṧşᶕŝșṡṣṩßʂᵴᶊᴤȿſtⱷŧťʨţṱțȶⱦẗṫṭʧƭᵺṯᵵƽƅƨƫʈʦʇuᴝúʉŭǔûṷȕüᴞǘṳǚǜǖụᵫùủưứựừửữűȗūṻųʊᵿᶙůᵾũṹṵvⱴṿʋᶌṽʌwẃŵẅẇẉẁẘʍƿxẍẋᶍyýŷÿẏỵỳƴỷȳẙɏỹʎzźžẑʑⱬżẓȥẕᵶᶎʐƶɀ/f_f/f_f_i/f_f_l ﬁﬂʶₐªºǂǀǁǃₑʱʰⁱᵢʲˡⁿₒʵʳᵣʴₔˢƻᵤᵥʷₓˣʸАБВГЃҐДЕЀЁЖЗИЙҊЍКЌЛМНОПРСТУЎФХЧЦШЩЏЬЪЫЉЊЅЄЭІЇЈЋЮЯЂѠѢѤѦѨѪѬѮѰѲѴѶѸҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒҀҌҎᴫабвгѓґдеѐёжзийҋѝкќлмнопрстуўфхчцшщџьъыљњѕєэіїјћюяђѡѣѥѧѩѫѭѯѱѳѵѷѹғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӏӂӄӆӈӊӌӎӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓҁҍҏϮϤϪϨϦϢϬΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΆΈΉΊΌΎΏΪΫϘϚϜϞϠϒϓϔϴϷϹϺϽϾϿἈἉἊἋἌἍἎἏᾺΆᾸᾹᾼᾈᾉᾊᾋᾌᾍᾎᾏἘἙἚἛἜἝῈΈἨἩἪἫἬἭἮἯῊΉῌᾘᾙᾚᾛᾜᾝᾞᾟἸἹἺἻἼἽἾἿῚΊῘῙὈὉὊὋὌὍῸΌῬὙὛὝὟῪΎῨῩὨὩὪὫὬὭὮὯῺΏῼᾨᾩᾪᾫᾬᾭᾮᾯᴦᴧᴨᴪᴩϯϥϫαβγδεζηθικλμνξοπρςστυφχψωίϊΐύϋΰόώάέήͻͼͽϙϛϝϟϡϗϐϑϕϖϰϱϲϳϵϸϻϼἀἁἂἃἄἅἆἇὰάᾶᾰᾱᾳᾲᾴᾀᾁᾂᾃᾄᾅᾆᾇᾷἐἑἒἓἔἕὲέἠἡἢἣἤἥἦἧὴήῆῃῂῄᾐᾑᾒᾓᾔᾕᾖᾗῇἰἱἲἳἴἵἶἷὶίῖῐῑῒΐῗὀὁὂὃὄὅὸόῤῥὐὑὒὓὔὕὖὗὺύῦῠῡῢΰῧὠὡὢὣὤὥὦὧὼώῶῳῲῴᾠᾡᾢᾣᾤᾥᾦᾧῷϩϧϣϭᵦᵪᵞᵧͺᵠᵩᵨℲⅎᴭᴬᴯᴮᴰᴲᴱᴳᴴᴵᶦᶧᴶᴷᴸᶫᴹᴻᴺᶰᴽᴼᴾᴿᵀᵁᶸᵂᵄᵆᵜᵅᶛᵃᶱᵝᵇᶝᵡᶜᵟᵈꜙꜘꜗᵋᶟᵌᵉᵑᵸᶴᶞᶾᶠᵍᶣᵎᶥᶤᶨᶡᵏꜚᶪᶩᵚᶬᶭᵐᶮᶯᵕᵓᵔᵒᶲᵖᵊᶢᶳᶿᵗᶵᵙᶶᵘᶷᶹᵛᶺᶽᶻᶼ0123456789⓿❶❷❸❹❺❻❼❽❾❿⓫⓬⓭⓮⓯⓰⓱⓲⓳⓴⓪①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹⁄⅟½⅓⅔¼¾⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞Ↄ.,:;…!¡?¿·•*‖‼‽#‾/\\⁞₍₎(){}[]⁽⁾-–—⸗‒―_‗‚„“”‘’‛‟«»‹›‴"\'·;              ​/.notdef ‎‏﻿‍‌₳฿₵¢₡₢¤$₫₯€₠ƒ₣₰₲₴₭₤₺₥₦₧₱₨₹₪£₸₮₩¥'

// Spacing above and below the star depending on the presence or absence of personal pronouns
var STAR_SPACING_WITH_PRONOUN = 40
var STAR_SPACING_WITHOUT_PRONOUN = 50

// Extra optical adjustment below the star
var BELOW_STAR_ADJUSTMENT = 3

// Overall vertical adjustment (negative if the badge is bottom-heavy)
var VERTICAL_CENTER_ADJUSTMENT = -8

// If the badge content is taller than MAX_HEIGHT, tighten it a bit with TIGHTENING_HEIGHT
var MAX_HEIGHT = 342
var TIGHTENING_HEIGHT = 7

// Magic
// -----

// Those are supposed to speed up things
app.scriptPreferences.enableRedraw = false
app.scriptPreferences.userInteractionLevel = UserInteractionLevels.neverInteract

// This should speed up the execution, too – but replace with “main()” for debugging since otherwise
// all the error messages will point to this line
app.doScript(main, undefined, undefined, UndoModes.fastEntireScript)

function main() {
  // More magic incantations that make things go faster

  cTID = function(s) { return app.charIDToTypeID(s) }
  sTID = function(s) { return app.stringIDToTypeID(s) }
    
  Stdlib = function Stdlib() {};  
    
  Stdlib.setActionPlaybackOptions = function(opt, arg) {  
    function _ftn() {  
      var desc = new ActionDescriptor()
      var ref = new ActionReference()
      ref.putProperty(cTID("Prpr"), cTID("PbkO"))
      ref.putEnumerated(cTID("capp"), cTID("Ordn"), cTID("Trgt"))
      desc.putReference(cTID("null"), ref)
      var pdesc = new ActionDescriptor()
      pdesc.putEnumerated(sTID("performance"), sTID("performance"), sTID(opt))
      if (opt == "pause" && arg != undefined) {
        pdesc.putInteger(sTID("pause"), parseInt(arg))
      }
      desc.putObject(cTID("T "), cTID("PbkO"), pdesc)
      executeAction(cTID("setd"), desc, DialogModes.NO)
    }  
    _ftn()
  }  
  Stdlib.setPlaybackAcclerated = function() { Stdlib.setActionPlaybackOptions("accelerated") }  
  Stdlib.setPlaybackStepByStep = function() { Stdlib.setActionPlaybackOptions("stepByStep") }
  Stdlib.setPlaybackPaused = function(delaySec) { Stdlib.setActionPlaybackOptions("pause", delaySec) }

  // My functions begin here
  // -----------------------

  // Show or hide a given element
  function showOrHide(el, show) {
    if (show) {
      el.visible = true
    } else {
      el.visible = false
    }
  }

  // Get an item via its Script Label (see Script Label window in InDesign)
  function getItemByLabel(page, scriptLabel) {
    for (var i = 0; i < page.pageItems.length; i++) {
      var item = page.pageItems.item(i)
      if (item.label == scriptLabel) {
        return item
      }
    }
    return false
  }

  // Create a window with a progress bar
  function createProgressBar(dialog, max) {
    var progressBar = dialog.add("progressbar", undefined, 1, max)
    progressBar.preferredSize = [300, 20]
    dialog.show()
    return progressBar
  }

  // Highlight any characters not supported by a given font by using "Missing character" style
  function highlightMissingCharacters(el) {
    var text = el.parentStory.contents

    // Remove the style… easiest to create "None" which does nothing than remove a style
    el.characters.itemByRange(0, text.length - 1).appliedCharacterStyle = 'None'

    // Check for missing characters
    for (var i = 0; i < text.length; i++) {
      var character = text.substr(i, 1)
      if (SUPPORTED_CHARS.indexOf(character) == -1) {
        el.characters.itemByRange(i, i).appliedCharacterStyle = 'Missing character'
      }
    }
  }

  // Program execution begins here
  // ------------------------------

  var myDocument = app.activeDocument

  // Running it on unmerged document will break it
  if (myDocument.pages.length == 1) {
    if (!confirm("This document only has one page. Are you sure you're running it on a merged document?")) {
      return
    }
  }

  if (CURRENT_PAGE_ONLY) {
    var startPage = app.activeWindow.activePage.name
    var endPage = app.activeWindow.activePage.name
  } else {
    var startPage = 0
    var endPage = myDocument.pages.length - 1
    
    alert("Ready to make badges! This might take some time...")
  }

  var dialog = new Window("palette", "Laying out badges...")
  var progressBar = createProgressBar(dialog, endPage - startPage + 1)

  for (var pageNo = startPage; pageNo <= endPage; pageNo++) { 
    progressBar.value = pageNo - startPage
    $.sleep(100) // Not sure if this is needed

    var page = myDocument.pages.item(pageNo)

    // Get data from the merge fields at the bottom
    // --------------------------------------------

    // .parentStory is necessary because .contents alone breaks after
    // the item overflows in any way
    var firstName = getItemByLabel(page, "DataFirstName").parentStory.contents
    var lastName = getItemByLabel(page, "DataLastName").parentStory.contents

    // \r means new paragraph (different than new line for \n)
    var interests = getItemByLabel(page, "DataInterest1").parentStory.contents + '\r' +
        getItemByLabel(page, "DataInterest2").parentStory.contents + '\r' +
        getItemByLabel(page, "DataInterest3").parentStory.contents
    var neighborhood = getItemByLabel(page, "DataNeighborhood").parentStory.contents 
    var newcomer = getItemByLabel(page, "DataNewcomer").parentStory.contents != 'no'
    var pronouns = getItemByLabel(page, "DataPronouns").parentStory.contents

    // For some reason an empty cell starts with zero non-width space, isn’t actually empty
    var pronounsPresent = getItemByLabel(page, "DataPronouns").parentStory.contents.charCodeAt(0) != 65279

   // Hide the merge fields at the bottom
    showOrHide(getItemByLabel(page, "DataFirstName"), false)
    showOrHide(getItemByLabel(page, "DataLastName"), false)
    showOrHide(getItemByLabel(page, "DataInterest1"), false)
    showOrHide(getItemByLabel(page, "DataInterest2"), false)
    showOrHide(getItemByLabel(page, "DataInterest3"), false)
    showOrHide(getItemByLabel(page, "DataNeighborhood"), false)
    showOrHide(getItemByLabel(page, "DataNewcomer"), false)
    showOrHide(getItemByLabel(page, "DataPronouns"), false)

    // Populate neighborhood
    // ---------------------

    showOrHide(getItemByLabel(page, "NeighborhoodSB"), (neighborhood == 'Science Bridge'))
    showOrHide(getItemByLabel(page, "NeighborhoodSR"), (neighborhood == 'The Sky Ride'))
    showOrHide(getItemByLabel(page, "NeighborhoodEI"), (neighborhood == 'Enchanted Island'))
    showOrHide(getItemByLabel(page, "NeighborhoodAP"), (neighborhood == 'Adler Planetarium'))
    showOrHide(getItemByLabel(page, "NeighborhoodII"), (neighborhood == 'Infant Incubator'))
    showOrHide(getItemByLabel(page, "NeighborhoodOB"), (neighborhood == 'Observation Balloon'))
    showOrHide(getItemByLabel(page, "NeighborhoodWOP"), (neighborhood == 'Whirl-O-Plane'))
    showOrHide(getItemByLabel(page, "NeighborhoodHOT"), (neighborhood == 'House of Tomorrow'))
    showOrHide(getItemByLabel(page, "NeighborhoodTWSMYA"), (neighborhood == 'The World A Million Years Ago'))
    showOrHide(getItemByLabel(page, "NeighborhoodFD"), (neighborhood == 'Fort Dearborn'))
    showOrHide(getItemByLabel(page, "NeighborhoodDS"), (neighborhood == 'Dance Ship'))
    showOrHide(getItemByLabel(page, "NeighborhoodTT"), (neighborhood == 'Travel & Transport'))
    showOrHide(getItemByLabel(page, "NeighborhoodHOS"), (neighborhood == 'Hall of Science'))
    showOrHide(getItemByLabel(page, "NeighborhoodDO49"), (neighborhood == 'Days of 49'))
    showOrHide(getItemByLabel(page, "NeighborhoodAOF"), (neighborhood == 'Avenue of Flags'))
    showOrHide(getItemByLabel(page, "NeighborhoodGHT"), (neighborhood == 'Giant Havoline Thermometer'))

    // Populate the newcomer star
    // --------------------------

    var starElement = getItemByLabel(page, newcomer ? "StarNewcomer" : "StarNotNewcomer")

    showOrHide(getItemByLabel(page, "StarNewcomer"), newcomer)
    showOrHide(getItemByLabel(page, "StarNotNewcomer"), !newcomer)

    // Populate interests and choose the right size
    // --------------------------------------------

    var desiredInterestSize = 'large'

    var interestsElement = getItemByLabel(page, "InterestsLarge")
    interestsElement.parentStory.contents = interests

    if (interestsElement.overflows) {
      interestsElement = getItemByLabel(page, "InterestsBig")
      interestsElement.parentStory.contents = interests

      desiredInterestSize = 'big'

      if (interestsElement.overflows) {
        interestsElement = getItemByLabel(page, "InterestsMedium")
        interestsElement.parentStory.contents = interests

        desiredInterestSize = 'medium'

        if (interestsElement.overflows) {
          interestsElement = getItemByLabel(page, "InterestsSmall")
          interestsElement.parentStory.contents = interests

          desiredInterestSize = 'small'

          if (interestsElement.overflows) {
            interestsElement = getItemByLabel(page, "InterestsTinyNarrow")
            interestsElement.parentStory.contents = interests

            desiredInterestSize = 'tinyNarrow'

            if (interestsElement.overflows) {
              interestsElement = getItemByLabel(page, "InterestsTiny")
              interestsElement.parentStory.contents = interests

              desiredInterestSize = 'tiny'
            }
          }
        }
      }
    }

    // Only show the interests in the right size
    showOrHide(getItemByLabel(page, "InterestsLarge"), (desiredInterestSize == 'large'))
    showOrHide(getItemByLabel(page, "InterestsBig"), (desiredInterestSize == 'big'))
    showOrHide(getItemByLabel(page, "InterestsMedium"), (desiredInterestSize == 'medium'))
    showOrHide(getItemByLabel(page, "InterestsSmall"), (desiredInterestSize == 'small'))
    showOrHide(getItemByLabel(page, "InterestsTinyNarrow"), (desiredInterestSize == 'tinyNarrow'))
    showOrHide(getItemByLabel(page, "InterestsTiny"), (desiredInterestSize == 'tiny'))


    // Populate first name/last name/gender pronouns and choose the right size
    // ------------------------------------------------------------------------

    desiredSize = 'large'

    var firstNameElement
    var lastNameElement

    firstNameElement = getItemByLabel(page, "FirstNameLarge")
    firstNameElement.parentStory.contents = firstName

    if (firstNameElement.overflows) {
      firstNameElement = getItemByLabel(page, "FirstNameMedium")
      firstNameElement.parentStory.contents = firstName

      desiredSize = 'medium'

      if (firstNameElement.overflows) {
        firstNameElement = getItemByLabel(page, "FirstNameSmall")
        firstNameElement.parentStory.contents = firstName

        desiredSize = 'small'

        if (firstNameElement.overflows) {
          firstNameElement = getItemByLabel(page, "FirstNameSmaller")
          firstNameElement.parentStory.contents = firstName

          desiredSize = 'smaller'

          if (firstNameElement.overflows) {
            firstNameElement = getItemByLabel(page, "FirstNameTiny")
            lastNameElement = getItemByLabel(page, "LastNameTiny")
            pronounElement = getItemByLabel(page, "PronounTiny")
            getItemByLabel(page, "FirstNameTiny").parentStory.contents = firstName

            desiredSize = 'tiny'
          } else {
            lastNameElement = getItemByLabel(page, "LastNameSmaller")
            pronounElement = getItemByLabel(page, "PronounSmaller")
          }
        } else {
          lastNameElement = getItemByLabel(page, "LastNameSmall")
          pronounElement = getItemByLabel(page, "PronounSmall")
        }
      } else {
        lastNameElement = getItemByLabel(page, "LastNameMedium")
        pronounElement = getItemByLabel(page, "PronounMedium")
      }
    } else {
      lastNameElement = getItemByLabel(page, "LastNameLarge")
      pronounElement = getItemByLabel(page, "PronounLarge")
    }

    lastNameElement.parentStory.contents = lastName      

    // Only show the names in the right size
    showOrHide(getItemByLabel(page, "FirstNameLarge"), (desiredSize == 'large'))
    showOrHide(getItemByLabel(page, "LastNameLarge"), (desiredSize == 'large'))
    showOrHide(getItemByLabel(page, "FirstNameMedium"), (desiredSize == 'medium'))
    showOrHide(getItemByLabel(page, "LastNameMedium"), (desiredSize == 'medium'))
    showOrHide(getItemByLabel(page, "FirstNameSmall"), (desiredSize == 'small'))
    showOrHide(getItemByLabel(page, "LastNameSmall"), (desiredSize == 'small'))
    showOrHide(getItemByLabel(page, "FirstNameSmaller"), (desiredSize == 'smaller'))
    showOrHide(getItemByLabel(page, "LastNameSmaller"), (desiredSize == 'smaller'))
    showOrHide(getItemByLabel(page, "FirstNameTiny"), (desiredSize == 'tiny'))
    showOrHide(getItemByLabel(page, "LastNameTiny"), (desiredSize == 'tiny'))

    // Only show the gender pronoun in the right size – and if the pronoun is present
    showOrHide(getItemByLabel(page, "PronounLarge"), pronounsPresent && (desiredSize == 'large'))
    showOrHide(getItemByLabel(page, "PronounMedium"), pronounsPresent && (desiredSize == 'medium'))
    showOrHide(getItemByLabel(page, "PronounSmall"), pronounsPresent && (desiredSize == 'small'))
    showOrHide(getItemByLabel(page, "PronounSmaller"), pronounsPresent && (desiredSize == 'smaller'))
    showOrHide(getItemByLabel(page, "PronounTiny"), pronounsPresent && (desiredSize == 'tiny'))

    var desiredSpacingAboveStar = pronounsPresent ? STAR_SPACING_WITH_PRONOUN : STAR_SPACING_WITHOUT_PRONOUN
    var desiredSpacingBelowStar = desiredSpacingAboveStar - BELOW_STAR_ADJUSTMENT

    var finished = false // We might have to do more than one pass

    do {
      // Make the first name and interests elements fit snugly around content 
      // --------------------------------------------------------------------

      firstNameElement.fit(FitOptions.FRAME_TO_CONTENT)

      // Fitting frame to content doesn’t respect vertical centering (always aligns to the top),
      // so we need to recenter vertically after fitting
      var oldY = interestsElement.geometricBounds[2]
      // The below is necessary because of a bug in InDesign
      interestsElement.textFramePreferences.autoSizingType = AutoSizingTypeEnum.HEIGHT_ONLY
      interestsElement.fit(FitOptions.FRAME_TO_CONTENT)
      var newY = interestsElement.geometricBounds[2]
      interestsElement.move(null, [0, (oldY - newY) / 2])

      // Space things properly above and below the star
      // ----------------------------------------------

      lastNameElement.fit(FitOptions.FRAME_TO_CONTENT)
      var lastNameBottomY = lastNameElement.geometricBounds[2] /* y2 */
      var interestTopY = interestsElement.geometricBounds[0] /* y1 */
      var starCenterY = (starElement.geometricBounds[0] + starElement.geometricBounds[2]) / 2

      var belowStarHeight = interestTopY - starCenterY

      var belowStarDelta = desiredSpacingBelowStar - belowStarHeight
      interestsElement.move(null, [0, belowStarDelta])

      var aboveStarHeightNew
      if (pronounsPresent) {
        pronounElement.parentStory.contents = pronouns
        pronounElement.fit(FitOptions.FRAME_TO_CONTENT)
        var pronounBottomY = pronounElement.geometricBounds[2] 
        aboveStarHeight = starCenterY - pronounBottomY
      } else {
        aboveStarHeight = starCenterY - lastNameBottomY
      }

      var aboveStarDelta = aboveStarHeight - desiredSpacingAboveStar
      firstNameElement.move(null, [0, aboveStarDelta])
      lastNameElement.move(null, [0, aboveStarDelta])
      if (pronounsPresent) {
        pronounElement.move(null, [0, aboveStarDelta])
      }

      // Tighten if need be
      // ------------------

      var topY = firstNameElement.geometricBounds[0] /* y1 */
      var bottomY = interestsElement.geometricBounds[2] /* y2 */
      var height = bottomY - topY
      var pageHeight = page.bounds[2] /* y2 */

      if (height > MAX_HEIGHT) {
        // Tighten a bit if need be, requires another pass
        desiredSpacingAboveStar -= TIGHTENING_HEIGHT
        desiredSpacingBelowStar -= TIGHTENING_HEIGHT

        // TK another pass
      } else {
        finished = true
      }
    } while (!finished)

    // Center vertically
    // -----------------

    var delta = (pageHeight - height) / 2 + VERTICAL_CENTER_ADJUSTMENT - topY 
    firstNameElement.move(null, [0, delta])
    lastNameElement.move(null, [0, delta])
    if (pronounsPresent) {
      pronounElement.move(null, [0, delta])
    }
    starElement.move(null, [0, delta])
    interestsElement.move(null, [0, delta])

    // Highlight characters missing from the font
    // ------------------------------------------

    highlightMissingCharacters(firstNameElement)
    highlightMissingCharacters(lastNameElement)
    if (pronounsPresent) {
      highlightMissingCharacters(pronounElement)
    }
    highlightMissingCharacters(interestsElement)    
  }

  if (!CURRENT_PAGE_ONLY) {
    dialog.hide()
    alert("Phew! Done.")
  }
}
