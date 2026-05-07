## 1. Real Quantities and fundamental constants

<img alt="D-SI-Image-1.1" width="600" style="border-width:10" src="wiki/doc/D-SI-1.1.PNG" /></a>
---
<img alt="D-SI-Image-1.2" width="600" style="border-width:10" src="wiki/doc/D-SI-1.2.PNG" /></a>
---
<img alt="D-SI-Image-1.3" width="600" style="border-width:10" src="wiki/doc/D-SI-1.3.PNG" /></a>
---
<img alt="D-SI-Image-1.4" width="600" style="border-width:10" src="wiki/doc/D-SI-1.4.PNG" /></a>
---
<img alt="D-SI-Image-1.5" width="600" style="border-width:10" src="wiki/doc/D-SI-1.5.PNG" /></a>
---
<img alt="D-SI-Image-1.6" width="600" style="border-width:10" src="wiki/doc/D-SI-1.6.PNG" /></a>
---
<img alt="D-SI-Image-1.7" width="600" style="border-width:10" src="wiki/doc/D-SI-1.7.PNG" /></a>
---
<img alt="D-SI-Image-1.8" width="600" style="border-width:10" src="wiki/doc/D-SI-1.8.PNG" /></a>

*Remark: It is in the responsibility of the creator of data to provide correct and consitent values for the expanded uncertianty, the coverage factor and the coverage probability. In case of inconsisten data, the value for the coverage factor should be seen as the "point of truth" in the data.*

<img alt="D-SI-Image-1.9" width="600" style="border-width:10" src="wiki/doc/D-SI-1.9.PNG" /></a>
---
<img alt="D-SI-Image-1.10" width="600" style="border-width:10" src="wiki/doc/D-SI-1.10.PNG" /></a>
---
<img alt="D-SI-Image-1.11" width="600" style="border-width:10" src="wiki/doc/D-SI-1.11.PNG" /></a>

<details><summary><strong>Show full XML example (top)</strong></summary>

```xml

<si:real>
    <si:label>temperature</si:label>
    <si:quantityType>temperature</si:quantityType> 
    <si:value>20.10</si:value>
    <si:unit>\degreecelsius</si:unit>
    <si:expandedUnc>
        <si:uncertainty>0.50</si:uncertainty>
        <si:coverageFactor>2</si:coverageFactor>
        <si:coverageProbability>0.95</si:coverageProbability>
        <si:distribution>normal</si:distribution>
    </si:expandedUnc>
</si:real>

```

</details>

<details><summary><strong>Show full XML example (bottom)</strong></summary>

```xml

<si:real>
    <si:label>temperature</si:label>
    <si:quantityType>temperature</si:quantityType> 
    <si:value>20.10</si:value>
    <si:unit>\degreecelsius</si:unit>
    <si:coverageInterval>
        <si:standardUnc>0.25</si:standardUnc>
        <si:intervalMin>19.60</si:intervalMin>
        <si:intervalMax>20.60</si:intervalMax>
        <si:coverageProbability>0.95</si:coverageProbability>
        <si:distribution>normal</si:distribution>
    </si:coverageInterval>
</si:real>

```

</details>

---
<img alt="D-SI-Image-1.12" width="600" style="border-width:10" src="wiki/doc/D-SI-1.12.PNG" /></a>

<details><summary><strong>Show full XML example</strong></summary>

```xml

<si:real>
    <si:label>temperature</si:label>
    <si:quantityType>temperature</si:quantityType>
    <si:value>20.10</si:value>
    <si:unit>\degreecelsius</si:unit>
    <si:coverageInterval>
        <si:standardUnc>0.25</si:standardUnc>
        <si:intervalMin>19.60</si:intervalMin>
        <si:intervalMax>20.60</si:intervalMax>
        <si:coverageProbability>0.95</si:coverageProbability>
        <si:distribution>normal</si:distribution>
    </si:coverageInterval>
</si:real>

```

</details>

---
<img alt="D-SI-Image-1.13" width="600" style="border-width:10" src="wiki/doc/D-SI-1.13.PNG" /></a>
---
<img alt="D-SI-Image-1.14" width="600" style="border-width:10" src="wiki/doc/D-SI-1.14.PNG" /></a>

<details><summary><strong>Show full XML example (top)</strong></summary>

```xml

<si:constant>
    <si:label>pi constant</si:label>
    <si:quantityType>pi</si:quantityType>
    <si:value>3.140</si:value>
    <si:unit>\one</si:unit>
    <si:uncertainty>0.003</si:uncertainty>
    <si:distribution>rectangular</si:distribution>
</si:constant>

```

</details>

<details><summary><strong>Show full XML example (middle)</strong></summary>

```xml

<si:constant>
    <si:label>planck constant</si:label>
    <si:quantityType>planck constant</si:quantityType>
    <si:value>6.626070040e-34</si:value>
    <si:unit>\kilogram\metre\tothe{2}\second\tothe{-1}</si:unit>
    <si:dateTime>2018-11-16T12:30:01.67-01:00</si:dateTime>
    <si:uncertainty>8.1e-42</si:uncertainty>
    <si:distribution>normal</si:distribution>
</si:constant>

```

</details>

<details><summary><strong>Show full XML example (bottom)</strong></summary>

```xml

<si:constant>
    <si:label>planck constant</si:label>
    <si:quantityType>planck constant</si:quantityType>
    <si:value>6.62607015e-34</si:value>
    <si:unit>\kilogram\metre\tothe{2}\second\tothe{-1}</si:unit>
    <si:dateTime>2019-05-21T02:00:00.10-01:00</si:dateTime>
</si:constant>

```

</details>

---

[**Home**](wiki/d-si-online-guide.md)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   [**>> Next Chapter 2**](wiki/doc/StructureSIUnits.md)



<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This documentation is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
