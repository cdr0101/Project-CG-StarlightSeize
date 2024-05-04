// Switcher State
// ----------------------------------------------------
let visible = 'Canvas'
const canvasSel = '#myCanvas'
const sels = {
  Canvas: canvasSel,
}
const icons = {
  Canvas: 'wallet',
}


function main() {
  const experiment = new Experiment()

  updateCandidateDetails(Experiment)

  // --------------------------------------------------
  // Canvas Setup
  // --------------------------------------------------
  canvasReset(canvasSel)
  const {canvas, ctx, bb} = getCanvas(canvasSel)


  // --------------------------------------------------
  // Geometry
  // --------------------------------------------------
  const path = Experiment.createGeometry()
  const path2 = Experiment.createMan()
  const path3 = Experiment.createHouse()
  // --------------------------------------------------
  // Transform
  // --------------------------------------------------
  // The scale rotate and translate transformations
  // have been computed as a combined matrix, before
  // being initialised here.
  const transform = Experiment.getBaseTransform()
  
  const transform2 = Experiment.getManTransform()
  const transform3 = Experiment.getHouseTransform()

  // --------------------------------------------------
  // Render Styles
  // --------------------------------------------------
  const styles = Experiment.getBaseStyles()
  const styles2 = Experiment.getBaseStylesMan()
  const styles3 = Experiment.getBaseStylesHouse()

  // --------------------------------------------------
  // Render
  // --------------------------------------------------


  // UFO
  // drawHouse(ctx,0)
  // disappearHouse(ctx,0)
  // drawSaucer(ctx)
  let saucerDrawn = false;
  canvas.addEventListener('click', function(event) {
    if (!saucerDrawn) {
      drawSaucer(ctx);
      saucerDrawn = true; 
  }
  });

}
function updateCandidateDetails({rollNos,names}) {
  let isValidRollNo, isValidName, act, byHtml, n
  isValidRollNo = (isValidName = false)

  // Validate RollNo
  
  rollNos = rollNos.split(',')
    .map(
      s => Number(s.trim())
    )
    .filter(
      n => {
	isValidRollNo = !isNaN(n) && 9999999 < n
	if (!isValidRollNo) {
	  console.warn({invalidRollNo: n,
			message: "Roll No should be Integer."})
	}
	return isValidRollNo
      }
    )

  // Validate Name
  const titleCasePat = /^[A-Z][a-z]+( [A-Z][a-z]+)*$/
  names = String(names).trim()

  act = names.split('(').shift().trim()
  isValidName = titleCasePat.test(act)
  if (!isValidName) {
    console.warn({invalidAct: act,
		  message: "Act should be in Title Case."})
    act = ''
  }

  names = names.split('(').pop().split(')').shift()
    .split(',').map(s=>s.trim())
    .filter(name => {
      isValidName = titleCasePat.test(name)
      if (!isValidName) {
	console.warn({invalidName: name,
		      message: "Name should be a Title Case."})
      }
      return isValidName
    })
  
  byHtml = ''

  n = Math.min(names.length, rollNos.length)
  for (const i of Array(n).keys()) {
    if (0 < i)
      byHtml = `${byHtml}<span class="p-2">|</span>`

    byHtml = `${byHtml}<code>${rollNos[i]}</code> : ${names[i]}`
  }

  if (0 < act.length) {
    byHtml = `<strong>${act}</strong><br class="hidden md:inline"/><span class="p-4 md:hidden">&mdash;</span>${byHtml}`
  }

  if (0 < byHtml.length) {
    byHtml = `Created by ${byHtml}`
  } else {
    byHtml
      = 'Error parsing candidate details. Check console.'
  }

  document.querySelector('#by')
    .innerHTML = byHtml
}

function saveCanvas() {
  const link = document.createElement('a');
  const {canvas, ctx, bb} = getCanvas(canvasSel)
  link.download = `${slug(Experiment.rollNos)}-${slug(document.title)}-canvas.png`;
  link.href = canvas.toDataURL()
  link.click();  
}
function slug(s) {
  return s
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(s=>0<s.length)
    .join('-')
}