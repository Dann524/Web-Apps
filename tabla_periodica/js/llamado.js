function elem(iden)
{
    var texto = "";
    var texto2="";
    if(iden=="1")
    {
       document.getElementById("img_elem").src = "img/h.jpeg";
       texto="Hidrógeno<br>Símbolo: H<br>Número atómico: 1<br>Masa atómica: 1.0079<br>Config. electrónica: 1s<sup>1</sup><br>Familia: IA<br>Periodo: 1<br>Serie química: No metales";
       document.getElementById("info").innerHTML = texto;
       texto2="El hidrógeno es el primer elemento de la tabla periódica. Es el elemento químico más ligero que existe, su átomo está formado por un protón y un electrón y es estable en forma de molécula diatómica (H2). En condiciones normales se encuentra en estado gaseoso, y es insípido, incoloro e inodoro.";
       document.getElementById("infotexto").innerHTML = texto2;
       
    }
    else if(iden=="2")
    {
        document.getElementById("img_elem").src = "img/he.jpeg";
        texto="Helio<br>Simbolo: He<br>Número atómico: 2<br>Masa atómica: 4.0026<br>Config. electrónica: 1s<sup>2</sup><br>Familia: VIIIA<br>Periodo: 1<br>Serie química: Gases Nobles";
        document.getElementById("info").innerHTML = texto;
        texto2="El helio es un elemento fundamental para la ciencia, ya que se utiliza para realizar resonancias magnéticas en medicina, además de ser fundamental para naves espaciales, telescopios y monitores de radiación.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="3")
    {
        document.getElementById("img_elem").src = "img/li.jpg";
        texto="Litio<br>Símbolo: Li<br>Número atómico: 3<br>Masa atómica: 6.941<br>Config. electrónica: 1s<sup>2</sup>2s<sup>1</sup><br>Familia: IA<br>Periodo: 2<br>Serie química: Metales alcalinos";
        document.getElementById("info").innerHTML = texto;
        texto2="El litio es un metal alcalino dúctil y ligero que existe en la naturaleza mezclado con otros compuestos y se utiliza en la fabricación de baterías, celulares, cerámica, vidrio, lubricantes y hasta en algunas medicinas usadas para los tratamientos de bipolaridad.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="4")
    {
        document.getElementById("img_elem").src = "img/be.jpg";
        texto="Berilio<br>Símbolo: Be<br>Número atómico: 4<br>Masa atómica: 9.0121<br>Config. electrónica: 1s<sup>2</sup>2s<sup>2</sup><br>Familia: IIA<br>Periodo: 2<br>Serie química: Alcalino Terreos";
        document.getElementById("info").innerHTML = texto;
        texto2="El berilio es un metal duro, frágil, de color blanco grisáceo. Se usa en la fabricación de tubos de rayos X, como moderador y reflector en reactores nucleares y en los frenos de las aeronaves.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="5")
    {
        document.getElementById("img_elem").src = "img/b.jpeg";
        texto="Boro<br>Símbolo: B<br>Número atómico: 5<br>Masa atómica: 10.811<br>Config. electrónica: [He]2s<sup>2</sup>2p<sup>1</sup><br>Familia: IIIA<br>Periodo: 2<br>Serie química: Metaloides";
        document.getElementById("info").innerHTML = texto;
        texto2="El boro ayuda al metabolismo adecuado de vitaminas y minerales involucrados con el desarrollo óseo, tales como calcio, cobre, magnesio y vitamina D4,10,14-18 Además, el boro parece afectar al estrógeno y probablemente también a la testosterona, hormonas que afectan la salud de los huesos.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="6")
    {
        document.getElementById("img_elem").src = "img/c.jpg";
        texto="Carbono<br>Símbolo: C<br>Número atómico: 6<br>Masa atómica: 12.0107<br>Config. electrónica: [He]2s<sup>2</sup>2p<sup>2</sup><br>Familia: IVA<br>Periodo: 2<br>Serie química: No metales";
        document.getElementById("info").innerHTML = texto;
        texto2="El carbono ayuda a regular la temperatura de la Tierra, hace posible la vida, es un ingrediente clave en los alimentos que nos sustentan y proporciona una fuente importante de energía para impulsar nuestra economía global. El ciclo del carbono es un viaje continuo desde la atmósfera al suelo terrestre y de vuelta.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="7")
    {
        document.getElementById("img_elem").src = "img/n.jpg";
        texto="Nitrógeno<br>Símbolo: N<br>Número atómico: 7<br>Masa atómica: 14.006<br>Config. electrónica: [He]2s<sup>2</sup>2p<sup>3</sup><br>Familia: VA<br>Periodo: 2<br>Serie química: No metales";
        document.getElementById("info").innerHTML = texto;
        texto2="El nitrógeno es un gas inerte que resulta adecuado para una amplia gama de aplicaciones, abarcando la fabricación, el procesamiento, la manipulación y el almacenamiento de productos químicos y alimenticios, entre otros. El nitrógeno no es reactivo y es excelente para recubrimientos y a menudo se usa como gas de purga.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="8")
    {
        document.getElementById("img_elem").src = "img/o.jpg";
        texto="Oxígeno<br>Símbolo: O<br>Número atómico: 8<br>Masa atómica: 15.999<br>Config. electrónica: [He]2s<sup>2</sup>2p<sup>4</sup><br>Familia: VIA<br>Periodo: 2<br>Serie química: No metales";
        document.getElementById("info").innerHTML = texto;
        texto2="El oxígeno es un gas que su cuerpo necesita para funcionar bien. Sus células necesitan oxígeno para producir energía. Sus pulmones absorben el oxígeno del aire que respira. Luego ingresa a la sangre desde los pulmones y viaja a sus órganos y tejidos del cuerpo.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="9")
    {
        document.getElementById("img_elem").src = "img/f.jpg";
        texto="Flúor<br>Símbolo: F<br>Número atómico: 9<br>Masa atómica: 18.998<br>Config. electrónica: [He]2s<sup>2</sup>2p<sup>5</sup><br>Familia: VIIA<br>Periodo: 2<br>Serie química: Halógenos";
        document.getElementById("info").innerHTML = texto;
        texto2="El flúor, también conocido como 'fluoruro', es un mineral que ocurre de forma natural en el suelo, el agua y el aire. Se ha demostrado que previene la caries dental.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="10")
    {
        document.getElementById("img_elem").src = "img/ne.jpg";
        texto="Neón<br>Símbolo: Ne<br>Número atómico: 10<br>Masa atómica: 20.179<br>Config. electrónica: [He]2s<sup>2</sup>2p<sup>6</sup><br>Familia: VIIIA<br>Periodo: 2<br>Serie química: Gases Nobles";
        document.getElementById("info").innerHTML = texto;
        texto2="El elemento químico neón también es utilizado en lámparas para probar la corriente eléctrica de alto voltaje, en tubos de rayos catódicos para proyectar imágenes en computadoras y televisores, como refrigerante en el intervalo de 25-40K y en lámparas incandescentes de neón, las cuales tienen un bajo costo";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="11")
    {
        document.getElementById("img_elem").src = "img/na.jpeg";
        texto="Sodio<br>Símbolo: Na<br>Número atómico: 11<br>Masa atómica: 22.989<br>Config. electrónica: [Ne]3s<sup>1</sup><br>Familia: IA<br>Periodo: 3<br>Serie química: Metales alcalinos";
        document.getElementById("info").innerHTML = texto;
        texto2="El sodio es un nutriente esencial que el cuerpo necesita en cantidades relativamente pequeñas (siempre que no exista una sudoración substancial) para mantener los fluidos corporales en equilibrio y los músculos y nervios funcionando sin problemas.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="12")
    {
        document.getElementById("img_elem").src = "img/mg.jpg";
        texto="Magnesio<br>Símbolo: Mg<br>Número atómico: 12<br>Masa atómica: 23.305<br>Config. electrónica: [Ne]3s<sup>2</sup><br>Familia: IIA<br>Periodo: 3<br>Serie química: Alcalino terreos";
        document.getElementById("info").innerHTML = texto;
        texto2="El magnesio es un nutriente que el cuerpo necesita para mantenerse sano. El magnesio es importante para muchos procesos que realiza el cuerpo. Por ejemplo, regula la función de los músculos y el sistema nervioso, los niveles de azúcar en la sangre, y la presión sanguínea.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="13")
    {
        document.getElementById("img_elem").src = "img/al.jpg";
        texto="Aluminio<br>Símbolo: Al<br>Número atómico: 13<br>Masa atómica: 26.091<br>Config. electrónica: [Ne]3s<sup>2</sup>3p<sup>1</sup><br>Familia: IIIA<br>Periodo: 3<br>Serie química: Metales de bloque p";
        document.getElementById("info").innerHTML = texto;
        texto2="El aluminio es un metal liviano de color blanco-plateado. El aluminio se usa para fabricar latas de bebidas, ollas y sartenes, aviones, el exterior de murallas y techos de viviendas y papel de aluminio. El polvo de aluminio metálico se usa a menudo en explosivos y fuegos artificiales.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="14")
    {
        document.getElementById("img_elem").src = "img/si.jpg";
        texto="Silicio<br>Símbolo: Si<br>Número atómico: 14<br>Masa atómica: 28.085<br>Config. electrónica: [Ne]3s<sup>2</sup>3p<sup>1</sup><br>Familia: IVA<br>Periodo: 3<br>Serie química: Metaloides";
        document.getElementById("info").innerHTML = texto;
        texto2="Es un oligoelemento esencial para la vida, imprescindible para la producción de moléculas básicas como el colágeno y la elastina, que aportan consistencia y rejuvenecen los tejidos. EL silicio se extrae del cuarzo y otros minerales y es el segundo elemento más abundante en la Tierra después del oxígeno.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="15")
    {
        document.getElementById("img_elem").src = "img/p.png";
        texto="Fósforo<br>Símbolo: P<br>Número atómico: 15<br>Masa atómica: 30.973<br>Config. electrónica: [Ne]3s<sup>2</sup>3p<sup>3</sup><br>Familia: VA<br>Periodo: 3<br>Serie química: No metales";
        document.getElementById("info").innerHTML = texto;
        texto2="El fósforo es un mineral que se encuentra en cada un de las células de nuestro organismo. La mayor parte del fósforo está en los huesos y los dientes, y otra parte en los genes. El organismo necesita fósforo para producir energía y llevar a cabo muchos procesos químicos importantes.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="16")
    {
        document.getElementById("img_elem").src = "img/s.jpg";
        texto="Azufre<br>Símbolo: S<br>Número atómico: 16<br>Masa atómica: 32.065<br>Config. electrónica: [Ne]3s<sup>2</sup>3p<sup>4</sup><br>Familia: VIA<br>Periodo: 3<br>Serie química: No Metales";
        document.getElementById("info").innerHTML = texto;
        texto2="El azufre es un elemento químico esencial para la vida, ya que es uno de los constituyentes básicos de los aminoácidos cisteína y metionina​ necesarios para la síntesis de proteínas presentes en todos los organismos vivos.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="17")
    {
        document.getElementById("img_elem").src = "img/cl.jpg";
        texto="Cloro<br>Símbolo: Cl<br>Número atómico: 17<br>Masa atómica: 35.453<br>Config. electrónica: [Ne]3s<sup>2</sup>3p<sup>5</sup><br>Familia: VIIA<br>Periodo: 3<br>Serie química: Halógenos";
        document.getElementById("info").innerHTML = texto;
        texto2="El cloro es una sustancia química industrial muy importante que se usa en la manufactura de miles de productos. También se usa para desinfectar agua, aunque el cloro se transforma rápidamente a otras sustancias al comienzo del proceso.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="18")
    {
        document.getElementById("img_elem").src = "img/ar.jpg";
        texto="Argón<br>Símbolo: Ar<br>Número atómico: 18<br>Masa atómica: 39.948<br>Config. electrónica: [Ne]3s<sup>2</sup>3p<sup>6</sup><br>Familia: VIIIA<br>Periodo: 3<br>Serie química: Gases Nobles";
        document.getElementById("info").innerHTML = texto;
        texto2="El argón se utiliza como atmósfera protectora para una gran cantidad de procesos industriales, incluida la fabricación de acero, la soldadura y la fabricación de metales, la electrónica, la conservación de alimentos y la elaboración del vino.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="19")
    {
        document.getElementById("img_elem").src = "img/k.jpg";
        texto="Potasio<br>Símbolo: K<br>Número atómico: 19<br>Masa atómica: 39.098<br>Config. electrónica: [Ar]4s<sup>1</sup><br>Familia: IA<br>Periodo: 4<br>Serie química: Alcalinos";
        document.getElementById("info").innerHTML = texto;
        texto2="El potasio es un mineral que se encuentra en muchos alimentos. El organismo necesita potasio para casi todo su funcionamiento, incluso para el buen funcionamiento del riñón y del corazón, la contracción muscular y la transmisión nerviosa.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="20")
    {
        document.getElementById("img_elem").src = "img/ca.png";
        texto="Calcio<br>Símbolo: Ca<br>Número atómico: 20<br>Masa atómica: 40.078<br>Config. electrónica: [Ar]4s<sup>2</sup><br>Familia: IIA<br>Periodo: 4<br>Serie química: Alcalino Terreos";
        document.getElementById("info").innerHTML = texto;
        texto2="El calcio es un mineral que el cuerpo necesita para formar y mantener huesos fuertes y llevar a cabo muchas funciones importantes. El calcio es el mineral más abundante en el organismo. Casi todo el calcio se almacena en los huesos y los dientes, lo que les da estructura y rigidez.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="21")
    {
        document.getElementById("img_elem").src = "img/sc.jpg";
        texto="Escandio<br>Símbolo: Sc<br>Número atómico: 21<br>Masa atómica: 44.955<br>Config. electrónica: [Ar]4s<sup>2</sup>3d<sup>1</sup><br>Familia: IIIB<br>Periodo: 4<br>Serie química: Metales del bloque p";
        document.getElementById("info").innerHTML = texto;
        texto2="El escandio es un metal ligero y plateado de número atómico 21. Se usa para alear el aluminio y darle más resistencia, para fabricar lámparas que emiten una luz muy parecida a la solar o para fabricar los depósitos que contienen el hidrógeno que algunos automóviles utilizan como combustible.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="22")
    {
        document.getElementById("img_elem").src = "img/ti.png";
        texto="Titanio<br>Símbolo: Ti<br>Número atómico: 22<br>Masa atómica: 47.867<br>Config. electrónica: [Ar]4s<sup>2</sup>3d<sup>2</sup><br>Familia: IVB<br>Periodo: 4<br>Serie química: Metales de transición";
        document.getElementById("info").innerHTML = texto;
        texto2="El titanio es un metal muy dúctil, con alta resistencia al índice de peso y excelente resistencia a la corrosión y biocompatibilidad. Se utiliza ampliamente en el sector aeronáutico, químico y médico, donde la seguridad y el control de calidad son esenciales.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="23")
    {
        document.getElementById("img_elem").src = "img/v.jpg";
        texto="Argón<br>Símbolo: Ar<br>Número atómico: 18<br>Masa atómica: 39.948<br>Config. electrónica: [Ne]3s<sup>2</sup>3p<sup>6</sup><br>Familia: VIIIA<br>Periodo: 3<br>Serie química: Gases Nobles";
        document.getElementById("info").innerHTML = texto;
        texto2="El vanadio se usa en la producción de resortes y herramientas de acero de alta velocidad resistentes a la corrosión. Es un estabilizador importante en la producción de acero. El pentóxido de vanadio se usa en cerámicas, como catalizador y también en la producción de imanes superconductores.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="24")
    {
        document.getElementById("img_elem").src = "img/cr.jpg";
        texto="Cromo<br>Símbolo: Cr<br>Número atómico: 24<br>Masa atómica: 51.996<br>Config. electrónica: [Ar]4s<sup>2</sup>3d<sup>4</sup><br>Familia: VIB<br>Periodo: 4<br>Serie química: Metales de transición";
        document.getElementById("info").innerHTML = texto;
        texto2="El cromo es importante en la descomposición de las grasas y de los carbohidratos. Estimula la síntesis de los ácidos grasos y del colesterol. Estos son importantes para la función cerebral y otros procesos corporales. El cromo también ayuda en la acción de la insulina y la descomposición de la glucosa.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="25")
    {
        document.getElementById("img_elem").src = "img/mn.jpg";
        texto="Manganeso<br>Símbolo: Mn<br>Número atómico: 25<br>Masa atómica: 51.996<br>Config. electrónica: [Ar]4s<sup>2</sup>3d<sup>5</sup><br>Familia: VIIB<br>Periodo: 4<br>Serie química: Metales de transición";
        document.getElementById("info").innerHTML = texto;
        texto2="El manganeso se usa principalmente en la producción de acero para mejorar su dureza, rigidez y solidez. También se puede usar como aditivo en la gasolina para mejorar el octanaje de la gasolina.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="26")
    {
        document.getElementById("img_elem").src = "img/fe.jpeg";
        texto="Hierro<br>Símbolo: Fe<br>Número atómico: 26<br>Masa atómica: 55.845<br>Config. electrónica: [Ar]4s<sup>2</sup>3d<sup>6</sup><br>Familia: VIIIB<br>Periodo: 4<br>Serie química: Metales de transición";
        document.getElementById("info").innerHTML = texto;
        texto2="El hierro comercialmente puro se usa para la producción de láminas de metal galvanizado y de electroimanes. Algunos compuestos de hierro son empleados para propósitos medicinales en el tratamiento de la anemia, cuando la cantidad de hemoglobina o el número de los glóbulos rojos de la sangre disminuye.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="27")
    {
        document.getElementById("img_elem").src = "img/co.jpg";
        texto="Cobalto<br>Símbolo: Co<br>Número atómico: 27<br>Masa atómica: 58.933<br>Config. electrónica: [Ar]4s<sup>2</sup>3d<sup>7</sup><br>Familia: VIIIB<br>Periodo: 4<br>Serie química: Metales de transición";
        document.getElementById("info").innerHTML = texto;
        texto2="El cobalto (Co) es un elemento de origen natural que se encuentra en rocas, tierra, agua y el aire. Las aleaciones producidas con metal de cobalto se usan en la fabricación de motores de aviones, imanes, herramientas de molienda y corte, y dispositivos médicos y prótesis.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="28")
    {
        document.getElementById("img_elem").src = "img/ni.jpg";
        texto="Niquel<br>Símbolo: Ni<br>Número atómico: 28<br>Masa atómica: 59.6934<br>Config. electrónica: [Ar]4s<sup>2</sup>3d<sup>8</sup><br>Familia: VIIIB<br>Periodo: 4<br>Serie química: Metales de transición";
        document.getElementById("info").innerHTML = texto;
        texto2="Los compuestos de níquel se usan para niquelado, colorear cerámicas, fabricar baterías, y como sustancias conocidas como catalizadores, que aceleran la velocidad de reacciones químicas. El níquel ocurre en forma natural en la corteza terrestre combinado con otros elementos.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="29")
    {
        document.getElementById("img_elem").src = "img/cu.jpg";
        texto="Cobre<br>Símbolo: Cu<br>Número atómico: 29<br>Masa atómica: 63.546<br>Config. electrónica: [Ar]4s<sup>2</sup>3d<sup>9</sup><br>Familia: IB<br>Periodo: 4<br>Serie química: Metales de transición";
        document.getElementById("info").innerHTML = texto;
        texto2="El cobre es un mineral que necesitamos para mantenernos sanos. El organismo usa cobre para llevar a cabo muchas funciones importantes, como producir energía, tejidos conectivos y vasos sanguíneos. El cobre también ayuda a mantener el sistema nervioso y el sistema inmunitario y activa los genes, también es el tercer mejor conductor de electricidad.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="30")
    {
        document.getElementById("img_elem").src = "img/zn.png";
        texto="Zinc<br>Símbolo: Zn<br>Número atómico: 30<br>Masa atómica: 63.546<br>Config. electrónica: [Ar]4s<sup>2</sup>3d<sup>10</sup><br>Familia: IIB<br>Periodo: 4<br>Serie química: Metales de transición";
        document.getElementById("info").innerHTML = texto;
        texto2="Ayuda al sistema inmunitario a luchar contra las bacterias y los virus que lo atacan. El cuerpo también usa el zinc para producir ADN (el material genético de las células) y las proteínas. En el embarazo, la infancia, la niñez y la adolescencia el cuerpo necesita el zinc para crecer y desarrollarse bien.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="31")
    {
        document.getElementById("img_elem").src = "img/ga.jpeg";
        texto="Galio<br>Símbolo: Ga<br>Número atómico: 31<br>Masa atómica: 60.723<br>Config. electrónica: [Ar]4s<sup>2</sup>3d<sup>10</sup>4p<sup>1</sup><br>Familia: IIIA<br>Periodo: 4<br>Serie química: Metales del bloque p";
        document.getElementById("info").innerHTML = texto;
        texto2="La principal aplicación del galio se produce en semiconductores, donde se utiliza de forma común en circuitos de microondas y en algunas aplicaciones de infrarrojos, como componente de los paneles solares y para fabricar diodos LED de color azul y violeta y diodos láser.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="32")
    {
        document.getElementById("img_elem").src = "img/ge.jpg";
        texto="Germanio<br>Símbolo: Ge<br>Número atómico: 32<br>Masa atómica: 72.64<br>Config. electrónica: [Ar]4s<sup>2</sup>3d<sup>10</sup>4p<sup>2</sup><br>Familia: IVA<br>Periodo: 4<br>Serie química: Metaloides";
        document.getElementById("info").innerHTML = texto;
        texto2="Anteriormente, fue utilizado principalmente en la fabricación de transistores y otros elementos electrónicos. Y actualmente su principal aplicación está en la industria de la fibra óptica, dispositivos ópticos de infrarrojos y en la fabricación de paneles solares.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="33")
    {
        document.getElementById("img_elem").src = "img/as.jpeg";
        texto="Arsénico<br>Símbolo: As<br>Número atómico: 33<br>Masa atómica: 74.921<br>Config. electrónica: [Ar]4s<sup>2</sup>3d<sup>10</sup>4p<sup>3</sup><br>Familia: VA<br>Periodo: 4<br>Serie química: Metaloides";
        document.getElementById("info").innerHTML = texto;
        texto2="El arsénico se utiliza industrialmente como agente de aleación, así como para el procesamiento de vidrio, pigmentos, textiles, papel, adhesivos metálicos, protectores de la madera y municiones.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="34")
    {
        document.getElementById("img_elem").src = "img/se.jpg";
        texto="Selenio<br>Símbolo: Se<br>Número atómico: 34<br>Masa atómica: 78.96<br>Config. electrónica: [Ar]4s<sup>2</sup>3d<sup>10</sup>4p<sup>4</sup><br>Familia: VIA<br>Periodo: 4<br>Serie química:No Metales";
        document.getElementById("info").innerHTML = texto;
        texto2="El selenio es un nutriente que el cuerpo necesita para mantenerse sano. El selenio es importante para la reproducción, la función de la glándula tiroidea, la producción de ADN y para proteger al cuerpo contra infecciones y el daño causado por los radicales libres.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="35")
    {
        document.getElementById("img_elem").src = "img/br.jpg";
        texto="Bromo<br>Símbolo: Br<br>Número atómico: 35<br>Masa atómica: 79.904<br>Config. electrónica: [Ar]4s<sup>2</sup>3d<sup>10</sup>4p<sup>5</sup><br>Familia: VIIA<br>Periodo: 4<br>Serie química: Halógenos";
        document.getElementById("info").innerHTML = texto;
        texto2="El bromo se utiliza en la preparación de ciertas tinturas y de dibromoetano ( bromuro de etileno), un componente antidetonante para la gasolina. Los bromuros se usan en fotografía (AgBr) como emulsión, en medicina (KBr) como sedante y en la producción de petróleo y gas natural.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else if(iden=="36")
    {
        document.getElementById("img_elem").src = "img/kr.jpg";
        texto="Kriptón<br>Símbolo: Kr<br>Número atómico: 36<br>Masa atómica: 83.798<br>Config. electrónica: [Ar]4s<sup>2</sup>3d<sup>10</sup>4p<sup>6</sup><br>Familia: VIIIA<br>Periodo: 4<br>Serie química: Gases Nobles";
        document.getElementById("info").innerHTML = texto;
        texto2="El criptón es el componente clave utilizado en mezclas de gas de láser excímero de neón que se utilizan para generar luz láser con la finalidad de obtener una fotolitografía precisa en la fabricación de semiconductores.";
        document.getElementById("infotexto").innerHTML = texto2;
    }
    else
    {
        alert("Exception: Unexpected Error");
    }
    window.location.href="#resumen";
}

function alerta()
{
    window.location.href="#resumen";
    /*alert("Desplazate hacia abajo para ver el contenido!");*/
}

function carga()
{
    window.location.href="#historia";
}