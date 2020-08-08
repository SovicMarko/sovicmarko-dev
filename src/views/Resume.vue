<template>
    <div>
        <h1>Resume</h1>
        <embed src="@/assets/pdf/MarkoResume.pdf" width="100%" height="1000px"  type="application/pdf">
        <object width="400" height="500" type="application/pdf" data="@/assets/pdf/MarkoResume.pdf">
            <p>Insert your error message here, if the PDF cannot be displayed.</p>
        </object>
        <br>
        <br>
        <br>
        <br>
    </div>
  
</template>

<script>
export default {
    name: "Resume"
}
</script>

<style>

</style>