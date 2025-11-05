const data = [

    // Formules d’addition
    [["$\\sin(a+b)$"],["$\\sin(a)\\cos(b) + \\sin(b)\\cos(a)$"]],
    [["$\\sin(a-b)$"],["$\\sin(a)\\cos(b) - \\sin(b)\\cos(a)$"]],
    [["$\\cos(a+b)$"],["$\\cos(a)\\cos(b) - \\sin(a)\\sin(b)$"]],
    [["$\\cos(a-b)$"],["$\\cos(a)\\cos(b) + \\sin(a)\\sin(b)$"]],
    [["$\\tan(a+b)$"],["$\\frac{\\tan(a)+\\tan(b)}{1-\\tan(a)\\tan(b)}$"]],
    [["$\\tan(a-b)$"],["$\\frac{\\tan(a)-\\tan(b)}{1+\\tan(a)\\tan(b)}$"]],

    // Angles doubles
    [["$\\sin(2a)$"],["$2\\sin(a)\\cos(a)$"]],
    [["$\\cos(2a)$"],["$\\cos^2(a) - \\sin^2(a)$"]],
    [["$\\tan(2a)$"],["$\\frac{2\\tan(a)}{1-\\tan^2(a)}$"]],

    // Formules de Carnot
    [["$\\cos^2(a)$"],["$\\frac{1+\\cos(2a)}{2}$"]],
    [["$\\sin^2(a)$"],["$\\frac{1-\\cos(2a)}{2}$"]],

    // Formules de Simpson
    [["$\\sin(p)+\\sin(q)$"],["$2\\sin\\left(\\frac{p+q}{2}\\right)\\cos\\left(\\frac{p-q}{2}\\right)$"]],
    [["$\\sin(p)-\\sin(q)$"],["$2\\cos\\left(\\frac{p+q}{2}\\right)\\sin\\left(\\frac{p-q}{2}\\right)$"]],
    [["$\\cos(p)+\\cos(q)$"],["$2\\cos\\left(\\frac{p+q}{2}\\right)\\cos\\left(\\frac{p-q}{2}\\right)$"]],
    [["$\\cos(p)-\\cos(q)$"],["$-2\\sin\\left(\\frac{p+q}{2}\\right)\\sin\\left(\\frac{p-q}{2}\\right)$"]],

    // Produits en somme
    [["$\\sin(a)\\sin(b)$"],["$\\frac{1}{2}\\big[\\cos(a-b) - \\cos(a+b)\\big]$"]],
    [["$\\sin(a)\\cos(b)$"],["$\\frac{1}{2}\\big[\\sin(a+b) + \\sin(a-b)\\big]$"]],
    [["$\\cos(a)\\cos(b)$"],["$\\frac{1}{2}\\big[\\cos(a+b) + \\cos(a-b)\\big]$"]],

    // tan(a/2)
    [["$\\tan(a)$"],["$\\frac{2\\tan\\left(\\frac{a}{2}\\right)}{1-\\tan^2\\left(\\frac{a}{2}\\right)}$"]],
    [["$\\sin(a)$"],["$\\frac{2\\tan\\left(\\frac{a}{2}\\right)}{1+\\tan^2\\left(\\frac{a}{2}\\right)}$"]],
    [["$\\cos(a)$"],["$\\frac{1-\\tan^2\\left(\\frac{a}{2}\\right)}{1+\\tan^2\\left(\\frac{a}{2}\\right)}$"]],

    // Autres identités
    [["$1+\\tan^2(a)$"],["$\\frac{1}{\\cos^2(a)}$"]],
    [["$1$"],["$\\sin^2(a)+\\cos^2(a)$"]]
];




// const data = [
    
//     //Formules d’additions
//     [["$$\sin(a+b)$$"],["$$\sin(a)\cos(b) + \sin(b)\cos(a)$$"]],
//     [["$$\sin(a-b)$$"],["$$\sin(a)\cos(b) - \sin(b)\cos(a)$$"]],
//     [["$$\cos(a+b)$$"],["$$\cos(a)\cos(b)-\sin(a)\sin(b)$$"]],
//     [["$$\cos(a-b)$$"],["$$\cos(a)\cos(b)+\sin(a)\sin(b)$$"]],
//     [["$$\\tan(a+b)$$"],["$$\\frac{\\tan(a)+\\tan(b)}{1-\\tan(a)\\tan(b)}$$"]],
//     [["$$\\tan(a-b)$$"],["$$\\frac{\\tan(a)-\\tan(b)}{1+\\tan(a)\\tan(b)}$$"]],

//     // Angles doubles
//     [["$$\sin(2a)$$"],["$$2\sin(a)\cos(a)$$"]],
//     [["$$\cos(2a)$$"],["$$\cos^2(a)-\sin^2(a)$$"]],
//     [["$$\\tan(2a)$$"],["$$\\frac{2\\tan(a)}{1-\\tan^2(a)}$$"]],
   
//     //Carnot
//     [["$$\cos^2(a)$$"],["$$\\frac{1+\cos(2a)}{2}$$"]],
//     [["$$\sin^2(a)$$"],["$$\\frac{1-\cos(2a)}{2}$$"]],

//     //Simpson
//     [["$$\sin(p)+\sin(q)$$"],["$$2\sin(\\frac{p+q}{2})\cos(\\frac{p-q}{2})$$"]],
//     [["$$\sin(p)-\sin(q)$$"],["$$2\sin(\\frac{p-q}{2})\cos(\\frac{p-q}{2})$$"]],
//     [["$$\cos(p)+\cos(q)$$"],["$$\cos(\\frac{p+q}{2})\cos(\\frac{p-q}{2})$$"]],
//     [["$$\cos(p)+\cos(q)$$"],["$$-2\sin(\\frac{p+q}{2})\sin(\\frac{p-q}{2})$$"]],

//     //Produits en somme
//     [["$$\sin(a)\sin(b)$$"],["$$\\frac{-1}{2}(\cos(a+b)-\cos(a+b))$$"]],
//     [["$$\sin(a)\cos(b)$$"],["$$\\frac{1}{2}(\sin(a+b)+\sin(a+b))$$"]],
//     [["$$\cos(a)\cos(b)$$"],["$$\\frac{1}{2}(\cos(a+b)+\cos(a+b))$$"]],

//     //tan a/2
//     [["$$\\tan(a)$$"],["$$\\frac{2\\tan(\\frac{a}{2})}{1-\\tan^2(\\frac{a}{2})}$$"]],
//     [["$$\sin(a)$$"],["$$\\frac{2\\tan(\\frac{a}{2})}{1+\\tan^2(\\frac{a}{2})}$$"]],
//     [["$$\cos(a)$$"],["$$\\frac{1-\\tan^2(\\frac{a}{2})}{1+\\tan^2(\\frac{a}{2})}$$"]],

//     //autres
//     [["$$1+\\tan^2(a)$$"],["$$\\frac{1}{\cos^2(a)}$$"]],
//     [["$$1$$"],["$$\sin^2(a)+\cos^2(a)$$"]]
// ];