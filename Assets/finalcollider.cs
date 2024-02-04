using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class finalcollider : MonoBehaviour
{
    public static int counter;
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (counter == 5)
        {
            counter = counter + 1;
        }
    }
}
