## 6. List of real quantities

<img alt="D-SI-Image-6.1" width="800" style="border-width:10" src="wiki/doc/D-SI-6.1.PNG" /></a>
---
<img alt="D-SI-Image-6.2" width="600" style="border-width:10" src="wiki/doc/D-SI-6.2.PNG" /></a>
---
<img alt="D-SI-Image-6.3" width="600" style="border-width:10" src="wiki/doc/D-SI-6.3.PNG" /></a>
---
<img alt="D-SI-Image-6.4" width="600" style="border-width:10" src="wiki/doc/D-SI-6.4.PNG" /></a>

<details><summary><strong>Show full XML example (left)</strong></summary>

```xml

<si:realList>
    <si:real>
        <si:value>2.34</si:value>
        <si:unit>\metre</si:unit>
    </si:real>
    <si:real>
        <si:value>3.34</si:value>
        <si:unit>\metre</si:unit>
    </si:real>
    <si:real>
        <si:value>4.34</si:value>
        <si:unit>\metre</si:unit>
    </si:real>
</si:realList>

```

</details>

<details><summary><strong>Show full XML example (right)</strong></summary>

```xml

<si:realList>
    <si:listUnit>\metre</si:listUnit>
    <si:real>
        <si:value>2.34</si:value>
    </si:real>
    <si:real>
        <si:value>3.34</si:value>
    </si:real>
    <si:real>
        <si:value>4.34</si:value>
    </si:real>
</si:realList>

```

</details>

---
<img alt="D-SI-Image-6.5" width="800" style="border-width:10" src="wiki/doc/D-SI-6.5.PNG" /></a>
---
<img alt="D-SI-Image-6.6" width="600" style="border-width:10" src="wiki/doc/D-SI-6.6.PNG" /></a>
---
<img alt="D-SI-Image-6.7" width="600" style="border-width:10" src="wiki/doc/D-SI-6.7.PNG" /></a>

<details><summary><strong>Show full XML example</strong></summary>

```xml

<si:realList>
    <si:real>
        <si:value>2.34</si:value>
        <si:unit>\metre</si:unit>
        <si:expandedUnc>
            <si:uncertainty>0.01</si:uncertainty>
            <si:coverageFactor>2</si:coverageFactor>
            <si:coverageProbability>0.95</si:coverageProbability>
            <si:distribution>normal</si:distribution>
        </si:expandedUnc>
    </si:real>
    <si:real>
        <si:value>3.34</si:value>
        <si:unit>\metre</si:unit>
        <si:expandedUnc>
            <si:uncertainty>0.01</si:uncertainty>
            <si:coverageFactor>2</si:coverageFactor>
            <si:coverageProbability>0.95</si:coverageProbability>
            <si:distribution>normal</si:distribution>
        </si:expandedUnc>	
    </si:real>
</si:realList>

```

</details>

---
<img alt="D-SI-Image-6.8" width="600" style="border-width:10" src="wiki/doc/D-SI-6.8.PNG" /></a>

<details><summary><strong>Show full XML example</strong></summary>

```xml

<si:realList>
    <si:listUnit>\metre</si:listUnit>
    <si:listUnivariateUnc>
        <si:expandedUnc>
            <si:uncertainty>0.01</si:uncertainty>
            <si:coverageFactor>2</si:coverageFactor>
            <si:coverageProbability>0.95</si:coverageProbability>
            <si:distribution>normal</si:distribution>
        </si:expandedUnc>
    </si:listUnivariateUnc>
    <si:real>
        <si:value>2.34</si:value>
    </si:real>
    <si:real>
        <si:value>3.34</si:value>
    </si:real>
</si:realList>

```

</details>

---
<img alt="D-SI-Image-6.9" width="800" style="border-width:10" src="wiki/doc/D-SI-6.9.PNG" /></a>
---
<img alt="D-SI-Image-6.10" width="800" style="border-width:10" src="wiki/doc/D-SI-6.10.PNG" /></a>

<details><summary><strong>Show full XML example (left)</strong></summary>

```xml

<si:realList>
    <si:real>
        <si:value>2.340</si:value>
        <si:unit>\metre</si:unit>
    </si:real>
    <si:real>
        <si:value>3.340</si:value>
        <si:unit>\second</si:unit>
    </si:real>
    <si:ellipsoidalRegion>
        <si:covarianceMatrix>
            <si:column>
                <si:covariance>
                    <si:value>0.212</si:value>
                    <si:unit>\metre\metre</si:unit>
                </si:covariance>
                <si:covariance>
                    <si:value>0.051</si:value>
                    <si:unit>\second\metre</si:unit>
                </si:covariance>
            </si:column>
            <si:column>
                <si:covariance>
                    <si:value>0.051</si:value>
                    <si:unit>\metre\second</si:unit>
                </si:covariance>
                <si:covariance>
                    <si:value>0.101</si:value>
                    <si:unit>\second\second</si:unit>
                </si:covariance>
            </si:column>
        </si:covarianceMatrix>
        <si:coverageFactor>2.45</si:coverageFactor>
        <si:coverageProbability>0.95</si:coverageProbability>
        <si:distribution>normal-multivariate</si:distribution>
    </si:ellipsoidalRegion>
</si:realList>

```

</details>

<details><summary><strong>Show full XML example (right)</strong></summary>

```xml

<si:realList>
    <si:real>
        <si:value>2.340</si:value>
        <si:unit>\metre</si:unit>
    </si:real>
    <si:real>
        <si:value>3.340</si:value>
        <si:unit>\second</si:unit>
    </si:real>
    <si:rectangularRegion>
        <si:covarianceMatrix>
            <si:column>
                <si:covariance>
                    <si:value>0.212</si:value>
                    <si:unit>\metre\metre</si:unit>
                </si:covariance>
                <si:covariance>
                    <si:value>0.051</si:value>
                    <si:unit>\second\metre</si:unit>
                </si:covariance>
            </si:column>
            <si:column>
                <si:covariance>
                    <si:value>0.051</si:value>
                    <si:unit>\metre\second</si:unit>
                </si:covariance>
                <si:covariance>
                    <si:value>0.101</si:value>
                    <si:unit>\second\second</si:unit>
                </si:covariance>
            </si:column>
        </si:covarianceMatrix>
        <si:coverageFactor>2.24</si:coverageFactor>
        <si:coverageProbability>0.95</si:coverageProbability>
        <si:distribution>normal-multivariate</si:distribution>
    </si:rectangularRegion>
</si:realList>

```

</details>

---
<img alt="D-SI-Image-6.11" width="800" style="border-width:10" src="wiki/doc/D-SI-6.11.PNG" /></a>

<details><summary><strong>Show full XML example</strong></summary>

```xml

<si:realList>
    <si:real>
        <si:value>2.340</si:value>
        <si:unit>\metre</si:unit>
    </si:real>
    <si:real>
        <si:value>3.340</si:value>
        <si:unit>\second</si:unit>
    </si:real>
    <si:ellipsoidalRegion>
        <si:covarianceMatrix>
            <si:column>
                <si:covariance>
                    <si:value>0.212</si:value>
                    <si:unit>\metre\metre</si:unit>
                </si:covariance>
                <si:covariance>
                    <si:value>0.051</si:value>
                    <si:unit>\second\metre</si:unit>
                </si:covariance>
            </si:column>
            <si:column>
                <si:covariance>
                    <si:value>0.051</si:value>
                    <si:unit>\metre\second</si:unit>
                </si:covariance>
                <si:covariance>
                    <si:value>0.101</si:value>
                    <si:unit>\second\second</si:unit>
                </si:covariance>
            </si:column>
        </si:covarianceMatrix>
        <si:coverageFactor>2.45</si:coverageFactor>
        <si:coverageProbability>0.95</si:coverageProbability>
        <si:distribution>normal-multivariate</si:distribution>
    </si:ellipsoidalRegion>
</si:realList>

```
</details>

---

<img alt="D-SI-Image-6.11" width="800" style="border-width:10" src="wiki/doc/XMLList-1.PNG" /></a>

---
<img alt="D-SI-Image-6.11" width="800" style="border-width:10" src="wiki/doc/XMLList-2.PNG" /></a>

---
<img alt="D-SI-Image-6.11" width="800" style="border-width:10" src="wiki/doc/XMLList-3.PNG" /></a>

---
<img alt="D-SI-Image-6.11" width="800" style="border-width:10" src="wiki/doc/XMLList-4.PNG" /></a>



[**Previous Chapter 5 <<**](wiki/doc/ListDataModel.md) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    [**Home**](wiki/d-si-online-guide.md)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   [**>> Next Chapter 7**](wiki/doc/ComplexList.md)


<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This documentation is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
