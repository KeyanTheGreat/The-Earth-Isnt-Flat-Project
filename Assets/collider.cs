using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using TMPro;

public class collider : MonoBehaviour
{
    public string words;
    public static int counter;
    private bool prevcounter;
    public TextMeshProUGUI textElement;

    void Start()
    {
        prevcounter = true;

    }
    void Update()
    {
        if(counter == 6){
            words = "The sun spins around the disk like a record player, day in and out, as does the moon. But how are they kept there? Um, I, that?s a good question? wait. How are they-";
        }
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        textElement.text = words;
        if (prevcounter == true){
            counter = counter + 1;
            prevcounter = false;
        }
    }
}
