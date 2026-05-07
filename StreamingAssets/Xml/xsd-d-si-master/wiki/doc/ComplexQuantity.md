## 4. Complex Quantity

<img alt="D-SI-Image-4.1" width="800" style="border-width:10" src="wiki/doc/D-SI-4.1.PNG" /></a>
---
<img alt="D-SI-Image-4.2" width="600" style="border-width:10" src="wiki/doc/D-SI-4.2.PNG" /></a>
---
<img alt="D-SI-Image-4.3" width="600" style="border-width:10" src="wiki/doc/D-SI-4.3.PNG" /></a>
---
<img alt="D-SI-Image-4.4" width="600" style="border-width:10" src="wiki/doc/D-SI-4.4.PNG" /></a>

<details><summary><strong>Show full XML example (top)</strong></summary>

```xml

<si:complex>
    <si:label>amplifier signal</si:label>
    <si:valueReal>-10.310</si:valueReal>
    <si:valueImag>5.010</si:valueImag>
    <si:unit>\volt</si:unit>
</si:complex>

```

</details>

<details><summary><strong>Show full XML example (bottom)</strong></summary>

```xml

<si:complex>
    <si:label>amplifier signal</si:label>
    <si:valueMagnitude>11.463</si:valueMagnitude>
    <si:valuePhase>2.689</si:valuePhase>
    <si:unit>\volt</si:unit>
    <si:unitPhase>\radian</si:unitPhase>
</si:complex>

```

</details>

---
<img alt="D-SI-Image-4.5" width="800" style="border-width:10" src="wiki/doc/D-SI-4.5.PNG" /></a>
---
<img alt="D-SI-Image-4.6" width="600" style="border-width:10" src="wiki/doc/D-SI-4.6.PNG" /></a>

<details><summary><strong>Show full XML example </strong></summary>

```xml

<si:complex>
    <si:valueReal>-10.310</si:valueReal>
    <si:valueImag>5.010</si:valueImag>
    <si:unit>\volt</si:unit>
    <si:ellipsoidalRegion>
        <si:covarianceMatrix>
            <si:column>
                <si:covariance>
                    <si:value>0.050</si:value>
                    <si:unit>\volt\volt</si:unit>
                </si:covariance>
                <si:covariance>
                    <si:value>-0.003</si:value>
                    <si:unit>\volt\volt</si:unit>
                </si:covariance>
            </si:column>
            <si:column>
                <si:covariance>
                    <si:value>-0.003</si:value>
                    <si:unit>\volt\volt</si:unit>
                </si:covariance>
                <si:covariance>
                    <si:value>0.105</si:value>
                    <si:unit>\volt\volt</si:unit>
                </si:covariance>
            </si:column>
        </si:covarianceMatrix>
        <si:coverageFactor>2.45</si:coverageFactor>
        <si:coverageProbability>0.95</si:coverageProbability>
        <si:distribution>normal-bivariate</si:distribution>
    </si:ellipsoidalRegion>
</si:complex>

```

</details>

---

[**Previous Chapter 3 <<**](wiki/doc/CoverageRegions.md) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    [**Home**](wiki/d-si-online-guide.md)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   [**>> Next Chapter 5**](wiki/doc/ListDataModel.md)


<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This documentation is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
