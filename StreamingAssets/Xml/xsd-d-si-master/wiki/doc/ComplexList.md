## 7. List of complex quantities

<img alt="D-SI-Image-7.1" width="800" style="border-width:10" src="wiki/doc/D-SI-7.1.PNG" /></a>
---
<img alt="D-SI-Image-7.2" width="800" style="border-width:10" src="wiki/doc/D-SI-7.2.PNG" /></a>
---
<img alt="D-SI-Image-7.3" width="600" style="border-width:10" src="wiki/doc/D-SI-7.3.PNG" /></a>
---
<img alt="D-SI-Image-7.4" width="600" style="border-width:10" src="wiki/doc/D-SI-7.4.PNG" /></a>

<details><summary><strong>Show full XML example (left)</strong></summary>

```xml

<si:complexList>
    <si:complex>
        <si:valueMagnitude>-10.30</si:valueMagnitude>
        <si:valuePhase>1.50</si:valuePhase>
        <si:unit>\ampere</si:unit>
        <si:unitPhase>\radian</si:unitPhase>
    </si:complex>
    <si:complex>
        <si:valueMagnitude>-12.30</si:valueMagnitude>
        <si:valuePhase>1.80</si:valuePhase>
        <si:unit>\ampere</si:unit>
        <si:unitPhase>\radian</si:unitPhase>
    </si:complex>
</si:complexList>

```

</details>

<details><summary><strong>Show full XML example (right)</strong></summary>

```xml

<si:complexList>
    <si:listUnit>\ampere</si:listUnit>
    <si:listUnitPhase>\radian</si:listUnitPhase>
    <si:complex>
        <si:valueMagnitude>-10.0</si:valueMagnitude>
        <si:valuePhase>1.50</si:valuePhase>
    </si:complex>
    <si:complex>
        <si:valueMagnitude>-12.30</si:valueMagnitude>
        <si:valuePhase>1.80</si:valuePhase>
    </si:complex>
</si:complexList>

```

</details>



---
<img alt="D-SI-Image-7.5" width="800" style="border-width:10" src="wiki/doc/D-SI-7.5.PNG" /></a>
---
<img alt="D-SI-Image-7.6" width="600" style="border-width:10" src="wiki/doc/D-SI-7.6.PNG" /></a>
---
<img alt="D-SI-Image-7.7" width="800" style="border-width:10" src="wiki/doc/D-SI-7.7.PNG" /></a>

<details><summary><strong>Show full XML example</strong></summary>

```xml

<si:complexList>
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
    <si:complex>
        <si:valueReal>-10.510</si:valueReal>
        <si:valueImag>5.510</si:valueImag>
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
</si:complexList>

```

</details>

---

<img alt="D-SI-Image-7.8" width="800" style="border-width:10" src="wiki/doc/D-SI-7.8.PNG" /></a>

<details><summary><strong>Show full XML example</strong></summary>

```xml

<si:complexList>
    <si:listUnit>\volt</si:listUnit>
    <si:listBivariateUnc>
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
    </si:listBivariateUnc>
    <si:complex>
        <si:valueReal>-10.310</si:valueReal>
        <si:valueImag>5.010</si:valueImag>
    </si:complex>
    <si:complex>
        <si:valueReal>-10.510</si:valueReal>
        <si:valueImag>5.510</si:valueImag>
    </si:complex>
</si:complexList>

```

</details>

---
<img alt="D-SI-Image-7.9" width="800" style="border-width:10" src="wiki/doc/D-SI-7.9.PNG" /></a>

<details><summary><strong>Show full XML example</strong></summary>

```xml

<si:complexList>
    <si:listUnit>\volt</si:listUnit>
    <si:listUnitPhase>\radian</si:listUnitPhase>
    <si:listBivariateUnc>
        <si:ellipsoidalRegion>
            <si:covarianceMatrix>
                <si:column>
                    <si:covariance>
                        <si:value>0.050</si:value>
                        <si:unit>\volt\volt</si:unit>
                    </si:covariance>
                    <si:covariance>
                        <si:value>-0.003</si:value>
                        <si:unit>\radian\volt</si:unit>
                    </si:covariance>
                </si:column>
                <si:column>
                    <si:covariance>
                        <si:value>-0.003</si:value>
                        <si:unit>\volt\radian</si:unit>
                    </si:covariance>
                    <si:covariance>
                        <si:value>0.105</si:value>
                        <si:unit>\radian\radian</si:unit>
                    </si:covariance>
                </si:column>
            </si:covarianceMatrix>
            <si:coverageFactor>2.45</si:coverageFactor>
            <si:coverageProbability>0.95</si:coverageProbability>
            <si:distribution>normal-bivariate</si:distribution>
        </si:ellipsoidalRegion>
    </si:listBivariateUnc>
    <si:complex>
        <si:valueMagnitude>11.463</si:valueMagnitude>
        <si:valuePhase>2.689</si:valuePhase>
    </si:complex>
    <si:complex>
        <si:valueMagnitude>10.543</si:valueMagnitude>
        <si:valuePhase>1.937</si:valuePhase>
    </si:complex>
</si:complexList>

```

</details>

---
<img alt="D-SI-Image-7.10" width="800" style="border-width:10" src="wiki/doc/D-SI-7.10.PNG" /></a>
---

<img alt="D-SI-Image-7.11" width="800" style="border-width:10" src="wiki/doc/D-SI-7.11.PNG" /></a>
<img alt="D-SI-Image-7.12" width="800" style="border-width:10" src="wiki/doc/D-SI-7.12.PNG" /></a>

<details><summary><strong>Show full XML example</strong></summary>

```xml
   
<si:complexList>
    <si:complex>
        <si:valueMagnitude>11.463</si:valueMagnitude>
        <si:valuePhase>2.689</si:valuePhase>
        <si:unit>\ampere</si:unit>
        <si:unitPhase>\radian</si:unitPhase>
    </si:complex>
    <si:complex>
        <si:valueMagnitude>10.543</si:valueMagnitude>
        <si:valuePhase>1.937</si:valuePhase>
        <si:unit>\volt</si:unit>
        <si:unitPhase>\degree</si:unitPhase>
    </si:complex>
    <si:ellipsoidalRegion>
        <si:covarianceMatrix>
            <si:column>
                <si:covariance>
                    <si:value>0.050</si:value>
                    <si:unit>\ampere\ampere</si:unit>
                </si:covariance>
                <si:covariance>
                    <si:value>0.00244</si:value>
                    <si:unit>\radian\ampere</si:unit>
                </si:covariance>
                <si:covariance>
                    <si:value>0.007</si:value>
                    <si:unit>\volt\ampere</si:unit>
                </si:covariance>
                <si:covariance>
                    <si:value>0.000</si:value>
                    <si:unit>\degree\ampere</si:unit>
                </si:covariance>
            </si:column>
            <si:column>
                <si:covariance>
                    <si:value>0.00244</si:value>
                    <si:unit>\ampere\radian</si:unit>
                </si:covariance>
                <si:covariance>
                    <si:value>0.105</si:value>
                    <si:unit>\radian\radian</si:unit>
                </si:covariance>
                <si:covariance>
                    <si:value>0.051</si:value>
                    <si:unit>\volt\radian</si:unit>
                </si:covariance>
                <si:covariance>
                    <si:value>0.109</si:value>
                    <si:unit>\degree\radian</si:unit>
                </si:covariance>
            </si:column>
            <si:column>
                <si:covariance>
                    <si:value>0.007</si:value>
                    <si:unit>\ampere\volt</si:unit>
                </si:covariance>
                <si:covariance>
                    <si:value>0.051</si:value>
                    <si:unit>\radian\volt</si:unit>
                </si:covariance>
                <si:covariance>
                    <si:value>0.076</si:value>
                    <si:unit>\volt\volt</si:unit>
                </si:covariance>
                <si:covariance>
                    <si:value>0.002</si:value>
                    <si:unit>\degree\volt</si:unit>
                </si:covariance>
            </si:column>	
            <si:column>
                <si:covariance>
                    <si:value>0.000</si:value>
                    <si:unit>\ampere\degree</si:unit>
                </si:covariance>
                <si:covariance>
                    <si:value>0.109</si:value>
                    <si:unit>\radian\degree</si:unit>
                </si:covariance>
                <si:covariance>
                    <si:value>0.002</si:value>
                    <si:unit>\volt\degree</si:unit>
                </si:covariance>
                <si:covariance>
                    <si:value>0.602</si:value>
                    <si:unit>\degree\degree</si:unit>
                </si:covariance>
            </si:column>
        </si:covarianceMatrix>
        <si:coverageFactor>3.08</si:coverageFactor>
        <si:coverageProbability>0.95</si:coverageProbability>
        <si:distribution>normal-multivariate</si:distribution>
    </si:ellipsoidalRegion>
</si:complexList>

```

</details>

---

[**Previous Chapter 6 <<**](wiki/doc/RealList.md) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    [**Home**](wiki/d-si-online-guide.md)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   [**>> Next Chapter 8**](wiki/doc/Hybrid.md)


<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This documentation is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
